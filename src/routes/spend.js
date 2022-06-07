const express = require("express");
const spendController = require("../controllers/spend")

const router = express.Router();

// /api/spend/
router.post('/', spendController.createSpend);

// /api/spends/search ? prop=hola&algomas=true
router.get('/search', spendController.findSpendByType);

// /api/spends/
router.get('/', spendController.getAllSpends);

/*router.get('/id/:id', spendController.getByID);*/

// /api/spends/algoMas
router.get('/algomas', () => { });

module.exports = router;