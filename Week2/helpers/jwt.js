const expressJwt = require('express-jwt');
const secret = "deneme";

module.exports = jwt;

function jwt() {
    return expressJwt({ secret, algorithms: ['HS256'] }).unless({
        path: [
            // bu yol public olarak tanımlanmıştır ve isteyen herkes bu yola request atabilir
            '/api/user/login'
        ]
    })
}