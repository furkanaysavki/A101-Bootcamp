const axios = require('axios'); // internette serbestce request atabilmemizi sağlayacak olan paket tanımlaması

exports.fetch = async () => { // fetch fonksiyonu markaları döndürür
    const response = await axios.get('https://api.trendyol.com/sapigw/brands');
    return response.data;
}

exports.fetchCategories = async () => { // fetchCategories fonksiyonu kategorileri döndürür
    const response = await axios.get('https://api.trendyol.com/sapigw/product-categories');
    return response.data;
}

exports.singleFetchBrand = async (brandName) => { // singleFetchBrand fonksiyonu name parametresi verilen markayı döndürür
    try {
        const response = await axios.get(`https://api.trendyol.com/sapigw/brands/by-name?name=${brandName}`)
        return {
            status: true,
            data: response.data
        }
    } catch {
        return {
            status: false,
            message: "Boyle bir kayit mevcut degilx"
        }
    }
    
    
}

exports.singleFetchCategory = async (categoryId) => { // singleFetchCategory fonksiyonu id parametresi verilen kategoriyi döndürür
    try {
        const response = await axios.get(`https://api.trendyol.com/sapigw/product-categories/${categoryId}/attributes`);
        return {
            status: true,
            data: response.data
        }
    } catch {
        return {
            status: false,
            message: "Boyle bir kayit mevcut degilx"
        }
    }
    
    
}