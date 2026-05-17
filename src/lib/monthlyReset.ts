import { collection, getDocs, updateDoc, doc, Timestamp } from 'firebase/firestore';
import { db } from './firebase';

/**
 * Verifica si es un nuevo mes y reinicia currentMonthLikes de todas las frases
 * Esta función se ejecuta al cargar la aplicación y verifica si el mes cambió
 */
export async function resetMonthlyLikesIfNeeded() {
  try {
    const now = new Date();
    const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    
    // Obtener el mes guardado en localStorage
    const savedMonth = localStorage.getItem('lastMonthReset');
    
    // Si el mes cambió, hacer el reset
    if (savedMonth !== currentMonth) {
      console.log(`🔄 Detectado nuevo mes: ${currentMonth}. Reiniciando currentMonthLikes...`);
      
      // Actualizar todas las frases en Firebase
      const frasesRef = collection(db, 'frases');
      const querySnapshot = await getDocs(frasesRef);
      
      const updatePromises = querySnapshot.docs.map((docSnap) => {
        return updateDoc(doc(db, 'frases', docSnap.id), {
          currentMonthLikes: 0,
          lastMonthReset: Timestamp.now()
        });
      });
      
      await Promise.all(updatePromises);
      
      // Guardar el nuevo mes en localStorage
      localStorage.setItem('lastMonthReset', currentMonth);
      console.log(`✅ Reset completado para ${querySnapshot.docs.length} frases`);
    }
  } catch (error) {
    console.error('Error durante el reset mensual:', error);
  }
}
