var crypto = require('crypto');

module.exports = {
    // хэширование пароля
    encrypt_pass: function (password) {
        var hash = crypto.createHmac('sha1', 'abc').update(password).digest('hex'); 
        return hash;
    } 
}