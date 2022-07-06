const jwt = require('jsonwebtoken');

const createJWTToken = user => {
    return jwt.sign({user}, 'hello456', {
        expiresIn: '1h'
    })
}

module.exports = {
    createJWTToken,
}