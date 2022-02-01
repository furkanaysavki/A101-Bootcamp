const jwt = require('jsonwebtoken') // gerekli jwt entegrasyonu için jwt tanımlaması
const Joi = require('joi'); // joi entegrasyonu için Joi tanımlaması

exports.register = (req,res) => {
    let response = {
        status: true
    }
    res.status(200).send(response)
}

exports.login = async (req,res) => { // kullanıcı login olmak istiyorsa email ve şifre joi doğrulamasından geçmek zorunda
    const schema = Joi.object({
        email: Joi.string().min(5).max(50).required(), // email en az 10 en çok 50 değerden oluşmalı ve boş geçilemez
        password: Joi.string().min(2).required() // şifre en az 6 değer içermeli ve boş geçilemez
    })

    try {
        const value = await schema.validateAsync({ email: req.body.email, password: req.body.password });
        // frontend den bize gönderilen email ve şifre eğer joi kontrollerinden başarıyla geçtiyse bu sefer doğru email ve şifreyi girip girmediğini kontrol ediyoruz
        if( value.email === 'deneme@gmail.com' && value.password === 'deneme123' ) {
            const secret = "deneme";
            // eğer doğru email ve şifre girildiyse bu kullanıca ait bir kimlik oluşturuyoruz
            const user = {
                id: 2,
                name: 'deneme2',
                surname: 'deneme3',
                email: 'deneme@gmail.com',
                role: 1,
                user_type: 'admin'
            }
            // bu kimlik ile bu kullanıcıya ait jwt token ı oluşturuyoruz
            const token = jwt.sign(
                user,
                secret,
                { expiresIn: '7d'} // token ın geçerlilik süresi 7 gün
            );
            res.send({
                status: true,
                jwt: {
                    token: token,
                    expiresIn: '7d'
                },
                user // kullanıcıya ait bilgileri cevap olarak döndürüyoruz
            });
    
    
        } else { // eğer girilen email ve şifre joi filitresinde geçti lakin sistemde kayıtlı olmayan email veya şifre girildiyse response olarak false döndürüyoruz
            let response = {
                status: false
            }
            res.status(200).send(response)
        }
    }
    catch (err) { // eğer girilen email veya şifre joi validasyonundan geçemediyse hata mesajı döndürüyoruz
        res.send({
            status: 400,
            message: "Please Enter Valid Values "
        })
    }

    
   
}


exports.jwtTest = (req,res) => {
    res.send({
        status: true,
        message: "jwttest calisti"
    })
}