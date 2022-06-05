const express = require("express");
const spendController = require("../controllers/spend")

const router = express.Router();

// /api/spend/
router.post('/', spendController.createSpend);

// /api/spends/search ? prop=hola&algomas=true
router.get('/search', () => { 
    console.log("One Spend or nothing")
});

// /api/spends/
router.get('/', () => { 
    console.log("All spends...")
});

// /api/spends/algoMas
router.get('/algomas', () => { });

module.exports = router;