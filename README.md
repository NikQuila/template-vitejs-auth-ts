Template-Vitejs-Auth-TS
Este es un template de Vitejs que incorpora la autenticación de Firebase y Firestore. Ha sido creado utilizando TypeScript + Tailwindcss.

Empezando
Estos son los pasos para configurar el proyecto en tu sistema local:

1. Clonar el repositorio
   Primero, clona este repositorio en tu sistema local utilizando el siguiente comando:

`git clone <repo_url>`

2. Instalar las dependencias
   En la carpeta del proyecto, ejecuta el siguiente comando para instalar todas las dependencias necesarias:

`npm install`

3. Crear un proyecto de Firebase
   Si aún no lo has hecho, necesitas crear un proyecto en Firebase. Para hacerlo, sigue las instrucciones en la documentación oficial de Firebase.

4. Configurar las credenciales de Firebase
   Después de crear el proyecto de Firebase, obtendrás las credenciales que se deben usar para conectar la aplicación con Firebase. Copia estas credenciales en el archivo .env de la siguiente manera:

VITE_FIREBASE_API_KEY=Tu API Key
VITE_FIREBASE_AUTH_DOMAIN=Tu dominio de autenticación
VITE_FIREBASE_PROJECT_ID=Tu ID de proyecto
VITE_FIREBASE_STORAGE_BUCKET=Tu bucket de almacenamiento
VITE_FIREBASE_MESSAGING_SENDER_ID=Tu ID de remitente de mensajes
VITE_FIREBASE_APP_ID=Tu ID de aplicación

Estos valores los encontrarás en la configuración de tu proyecto de Firebase.

5. Correr la aplicación
   Una vez que hayas realizado todos los pasos anteriores, ya estás listo para correr la aplicación. Desde la carpeta del proyecto, puedes correr la aplicación con el siguiente comando:

`npm run dev`

Características
Inicio de sesión de usuarios
Usuarios crearlos directamente desde Firebase
Autenticación de usuarios utilizando Firebase
Conexión con Firestore para guardar datos de usuarios
