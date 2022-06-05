//con clase creo que no iba despues ....
const prisma = require("../utils/client");

const { v4: uuidv4 } = require("uuid");
class Spend{
    constructor(date, type, amount){
        this.id = uuidv4();
        this.date = date;
        this.type = type;
        this.amount = amount;
    }

    save(){
        return this;
    }
}

module.exports = Spend;