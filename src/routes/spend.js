const express = require("express");
const spendController = require("../controllers/spend")

const router = express.Router();

// /api/spend/
router.post('/', spendController.createSpend);

// /api/spends/search ? prop=hola&algomas=true
router.get('/search', spendController.findSpendByType);

// /api/spends/
router.get('/', spendController.getAllSpends);

router.get('/totalAmount', spendController.totalAmount);

router.delete('/delete', spendController.deleteById);

module.exports = router;