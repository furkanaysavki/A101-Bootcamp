const brandService = require('../services/brand'); // brandServicedeki fonksiyonları kullabilmek için gerekli tanım

exports.fetchBrand = async (req,res) => { // brandServiceteki fetch fonksiyonu çalışacak ve bize bir response dönecek, bu responsun içinde markalar dönecektir
    const response = await brandService.fetch();
    res.send({
        status: true,
        data: response.brands
    })
}

exports.fetchCategories = async (req,res) => { // brandServiceteki fetchCategories fonksiyonu çalışacak ve bize bir response dönecek, bu responsun içinde kategoriler dönecektir
    const response = await brandService.fetchCategories();
    res.send({
        status: true,
        data: response.categories
    })
}

exports.singleFetchBrand = async (req,res) => { // brandServiceteki singleFetchBrand fonksiyonu çalışacak ve bize bir response dönecek, bu responsun içinde ismini parametre olarak verdiğimiz marka dönecektir
    const response = await brandService.singleFetchBrand(req.params.name);
    res.send(response);

    
}

exports.singleFetchCategory = async (req,res) => { // brandServiceteki singleFetchCategory fonksiyonu çalışacak ve bize bir response dönecek, bu responsun içinde idsini parametre olarak verdiğimiz kategori dönecektir
    const response = await brandService.singleFetchCategory(req.params.id);
    res.send(response);

    
}