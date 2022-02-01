const express = require('express') // server kurulumu için gerekli olan express paketi require ediliyor
const app = express()
const endPoint = require('./routes/api') // apiyi işaret eden endPoint tanımlanıyor
const jwt = require('./helpers/jwt') // jwt entegrasyonu için ilgili paket require ediliyor
const errorHandler = require('./helpers/error-handler')  // error handler entegrasyonu için route tanımlaması

app.use(express.json()); // frontend ile gelen json verilerini parse edebilmeyi saglayan kod
app.use(jwt())  // jwt entegrasyonunda root kontrolünü gerçekleştirecek kod satırı
app.use('/api',endPoint);  // api için endPoint tanımına gitmemizi gerektirecek kod satırı
app.use(errorHandler) // error handler çalışması için gerekli kod satırı

app.listen(3000,()=>{ // 3000 portunda server ı çalıştırmaya başlıyoruz
    console.log('Server is running');
})