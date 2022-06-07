const spend = require("../models/spend");

const createSpend = async (req,res,next) => {
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
    
    try{
        const newSpend = await spend.create(req.body.date, req.body.type, req.body.amount);
        res.send(newSpend)
    } catch(err){
        console.log(err);
        res.statusCode = 500;
        res.send(err.message);
    }
    
    

}

const getAllSpends = async (req,res,next) => {
    try{
        const spendsAll = await spend.getAllSpends();
        res.send(spendsAll);
    } catch(err){
        console.log(err);
        res.statusCode = 500;
        res.send(err.message);
    }
}

const findSpendByType = async(req,res,next) => {
    if(req.body.type === ""){
        res.statusCode = 400;
        res.send("El tipo no puede ser vacío");
    }
    try{
        const spends = await spend.findSpendByType(req.body.type);
        console.log("Response spend", spends);
        res.send(spends);
    } catch (err) {
        console.log(err);
        res.statusCode = 500;
        res.send(err.message);
    }
}

module.exports = {
    createSpend,
    getAllSpends,
    findSpendByType
}