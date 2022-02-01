const express = require('express')
let router = express.Router();


const productEndpoint = require('./product/product')


//DynamoDB:

router.use('/product',productEndpoint) //localhost:3000/api/product



module.exports = router;