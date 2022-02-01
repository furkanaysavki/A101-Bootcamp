const express = require('express'); // express aracılığla root işlemlerini kontrol edebilmemizi
let router = express.Router(); // sağlayan kod satırları

const userEndpoint = require('./user/user') // user ı işaret eden endPoint tanımlanıyor
const brandEndpoint = require('./brand/brand') // brand ı işaret eden endPoint tanımlanıyor

router.use('/user', userEndpoint) // projenin iskeletini oluşturacak yollar tanımlanıyor, api den sonra ulaşılabilecek yollar
router.use('/brand', brandEndpoint)


module.exports = router;