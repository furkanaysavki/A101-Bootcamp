const express = require('express'); // express aracılığla root işlemlerini kontrol edebilmemizi
let router = express.Router(); // sağlayan kod satırları
let userController = require('../../controllers/User') // brandController içindeki fonksiyonları kullabilmemizi sağlayan branController tanımlaması


router.post('/',userController.register) // eğer user ın kök dizinine post ile ulaşılmak istenirse userController içindeki register fonksiyonu çalışacaktır
router.post('/login',userController.login)
router.post('/jwttest',userController.jwtTest)


module.exports = router;