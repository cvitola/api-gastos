const prisma = require("../utils/client");
const { v4: uuidv4 } = require("uuid");

const create = async (date,type,amount) => {
    try{
        const newSpend = await prisma.spend.create({
            data:{
                date:date,
                type:type,
                amount:amount
            }
        });
        return newSpend;
    } catch(err){
        console.log(err);
        throw new Error(err);
    }
}

const getAllSpends = async () => {
    try{
        return await prisma.spend.findMany();
    }catch(err){
        console.log(err);
        throw new Error(err);
    }
}

const findSpendByType = async(type) => {
    try{
        const spends = await prisma.spend.findMany({
            where:{ type: type}
        });
        return spends;
    } catch(err){
        console.log(err);
        throw new Error (err);
    }
}

const totalAmount = async() => {
    let totalAmount = 0;
    try{
        const spendsArray = await prisma.spend.findMany();
        totalAmount = spendsArray.reduce((acum, s) => acum + parseInt(s.amount),0);
        console.log(`Total de gastos: ${totalAmount}`)
        return totalAmount;
    } catch(err){
        console.log(err);
        throw new Error (err);
    }
}

const deleteById = async(id) => {
    try{
        const deleteSpend = await prisma.spend.deleteMany({
            where: { id:id}
        })
        return deleteSpend;
    } catch(err) {
        console.log(err);
        throw new Error (err);
    }
}

module.exports = { 
    create,
    getAllSpends,
    findSpendByType,
    totalAmount,
    deleteById
 }