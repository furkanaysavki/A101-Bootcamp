module.exports = errorHandler;

function errorHandler(err, req, res, next) { // sistemde oluşabilecek errorları derlemeye ve kontrol etmeyi sağlayan fonksiyon tanımlanıyor
    if (typeof(err) === 'string') { // eğer hatanın türü string ise bu if çalışcak
        return res.status(400).json({message: err})
    }
    

    if (err.name === "UnauthorizedError") { // eğer hatanın ismi UnauthorizedError ise Token Mevcut Değil mesajı geçilecek
        return res.status(401).json({message: 'Token Mevcut Degil'})
    }

    return res.status(500).json({ message: err.message }); // eğer hata genel bir hataysa bu kod satırı çalışacak

}