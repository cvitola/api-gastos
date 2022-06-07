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

module.exports = { 
    create,
    getAllSpends,
    findSpendByType
 }