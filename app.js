const express = require("express");
const bodyParser = require("body-parser");
const spendRouter = require("./routes/spend");

//const db = require("./utils/db");

// --- pedasito para ver como funca primsa 
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
    await prisma.spend.create({
        data: {
            date: "14/01/2022",
            type:"Gas",
            amount: 511
        }
    });
    const spends = await prisma.spend.findMany();
    console.log(spends)
}


main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

// --- pedasito para ver como funca primsa 

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.use('/api/spends', spendRouter);
app.use( ( req, res, next ) => {
    res.statusCode = 404;
    res.send();
});

app.listen(PORT, () => {
    console.log(`Estoy online en ${PORT}`)
})