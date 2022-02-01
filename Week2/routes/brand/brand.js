const express = require('express'); // express aracılığla root işlemlerini kontrol edebilmemizi
let router = express.Router();  // sağlayan kod satırları

let brandController = require('../../controllers/brand') // brandController içindeki fonksiyonları kullabilmemizi sağlayan branController tanımlaması

router.get('/', brandController.fetchBrand); // eğer brand ın kök dizinine get ile ulaşılmak istenirse brandController içindeki fetchBrand fonksiyonu çalışacaktır
router.get('/category/:id', brandController.singleFetchCategory);
router.get('/categories', brandController.fetchCategories);
router.get('/brand/:name', brandController.singleFetchBrand);

module.exports = router;