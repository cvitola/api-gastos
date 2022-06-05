const Spend = require("../models/spend");

const createSpend = (req,res,next) => {
    console.log("Creating Spend:",  req.body);
    //validar que venga con los 3 campos
    if(req.body.date === ""){
        res.statusCode = 400;
        res.send("La fecha no puede ser vacía");
    }
    if(req.body.type === ""){
        res.statusCode = 400;
        res.send("El tipo no puede ser vacío");
    }
    if(req.body.amount === ""){
        res.statusCode = 400;
        res.send("El importe no puede ser vacío");
    }
    
    const newSpend = new Spend(req.body.date, req.body.type, req.body.amount);
    res.send(newSpend.save())

}

module.exports = {
    createSpend
}