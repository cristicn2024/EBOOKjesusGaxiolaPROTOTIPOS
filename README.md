# El Mindset Innovador

Landing page interactiva para promocionar y distribuir el ebook **El Mindset Innovador**. El sitio presenta frases destacadas, secciones del contenido, galeria con likes mensuales, opciones para compartir imagenes y un formulario de descarga conectado a Firebase y EmailJS.

Sitio desplegado: https://el-mindset-innovador.web.app

## Caracteristicas

- Hero con frases rotativas sobre innovacion, emprendimiento y liderazgo.
- Secciones del ebook con modal de lectura y enlaces compartibles por frase.
- Galeria interactiva con likes persistidos en Firestore.
- Ranking mensual de frases favoritas.
- Modal para compartir frases en redes sociales o descargar la imagen.
- Formulario de descarga que guarda suscriptores en Firestore y envia correo con EmailJS.
- Hosting configurado para SPA en Firebase Hosting.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Firebase Firestore
- Firebase Hosting
- EmailJS
- Radix UI, MUI y Lucide React

## Requisitos

- Node.js 20, 22 o 24 recomendado para evitar advertencias de compatibilidad con Firebase CLI.
- npm
- Firebase CLI:

```bash
npm install -g firebase-tools
```

## Configuracion local

1. Instala dependencias:

```bash
npm install
```

2. Crea un archivo `.env` en la raiz del proyecto con las credenciales necesarias:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrara la URL local, normalmente `http://localhost:5173`.

## Scripts

```bash
npm run dev
```

Levanta el entorno local de desarrollo.

```bash
npm run build
```

Genera la version de produccion en `dist/`.

## Firebase

El proyecto ya esta configurado para desplegar `dist/` como una SPA:

- Proyecto default: `el-mindset-innovador`
- Hosting public directory: `dist`
- Rewrite: todas las rutas apuntan a `/index.html`

Para autenticarte:

```bash
firebase login
```

Para compilar y desplegar:

```bash
npm run build
firebase deploy --only hosting --project el-mindset-innovador
```

## Datos usados en Firestore

La app escribe y lee principalmente estas colecciones:

- `frases`: almacena conteos de likes totales y mensuales por frase.
- `suscriptores`: guarda nombre, correo y fecha de registro del formulario de descarga.

Revisa las reglas de Firestore antes de publicar cambios que afecten escritura publica.

## Estructura principal

```text
src/
  app/
    App.tsx
    components/
  imports/
  lib/
    firebase.ts
    monthlyReset.ts
  styles/
firebase.json
.firebaserc
```

## Notas de despliegue

Durante el build puede aparecer una advertencia de chunks mayores a 500 kB. El despliegue funciona, pero si el sitio crece conviene separar rutas o componentes pesados con `dynamic import()`.

El comando `npm audit` reporta una vulnerabilidad alta en dependencias actuales. Antes de forzar actualizaciones, valida que no rompan Vite, React o los componentes generados.
