const express = require("express");
const bodyParser = require("body-parser");
const spendRouter = require("./routes/gastos");

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