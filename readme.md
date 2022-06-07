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

#USO DE LA API
1. Crear un gasto
pegarle al siguiente endpoint con metodo POST
http://localhost:3000/api/spends/
{
    date: "dd/mm/aaaa", -> String en formato dd mm aaaa
    type: "Un gasto X", -> String formato libre
    amount: 700 -> valor entero.
}
2. Recuperar todos los gastos
pegarle al siguiente endpoint con metodo GET
http://localhost:3000/api/spends/
Recibe un array de objetos con todos los gastos.
3. Recuperar un gasto por Tipo
pegarle al siguiente endpoint con metodo GET
http://localhost:3000/api/spends/