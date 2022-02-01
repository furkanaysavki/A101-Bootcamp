const aws = require('aws-sdk');
const express = require('express')
let router = express.Router();

let productController = require('../../controllers/Product')

router.post('/add',productController.add);
router.get('/getall',productController.getAll);
router.get('/getdiscount',productController.getDiscount);
router.get('/get/:productID',productController.getSingle);
router.put('/update',productController.update);
router.delete('/delete/:productID',productController.delete);

module.exports = router;