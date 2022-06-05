Creacion API 

ejecutar los siguientes comandos
1. npm init -y
2. npm install --save express body-parser
3. npm install --save-dev nodemon
4. en package.json agregar "dev": "nodemon app.js"
5. npm run dev

Prisma.

en la pagina guia de quickstart
npx prisma init
.env cadena de conexion al sql
se crea el modelo y se ejecuta la migracion.
npx prisma migrate dev --name init
//migracion OK creado en SQL.
Instalar CLI Prisma para poder manipular la BD desde la App.
npm install @prisma/client 
