const crypto = require('crypto');
const marker = 'PBKDF2',
    digest = 'sha256',
    iterations = 901,
    kenlen = 24;
/**
 * 生成PBKDF2
 * 输出约束https://exyr.org/2011/hashing-passwords/
 * @param {String} password 口令
 */
var generatePBKDF2 = function (password) {
    let salt = generateSalt(12).toString('base64');
    const key = crypto.pbkdf2Sync(password, salt, iterations, kenlen, digest);
    let val = key.toString('base64');
    return `${marker}\$${digest}\$${iterations}\$${salt}\$${val}`;
};
/**
 * 生成随机盐 返回Buffer
 * @param {Number} len 长度
 */
var generateSalt = function (len, maxval = 256) {
    let result = Buffer.alloc(len);
    for (let i = 0; i < len; i++) {
        result[i] = Math.floor(Math.random() * maxval);
    }
    return result;
};

/**
 * 验证密码是否正确，返回是否相等
 * @param {*} pbkdf2Val PBKDF2票据，格式: PBKDF2$sha256$901$djsq9clU8FtAm6tg$c6w59/6Iov6QVy974RySpJnX
 * @param {*} password 口令
 */
var valiPBKDF2 = function (pbkdf2Val, password) {
    let rary = pbkdf2Val.split('$'),
        marker = rary[0],
        digest = rary[1],
        iterations = parseInt(rary[2], 10),
        salt = rary[3],
        oldVal = rary[4],
        kenlen = Buffer.from(oldVal, 'base64').length;
    const key = crypto.pbkdf2Sync(password, salt, iterations, kenlen, digest);
    let val = key.toString('base64');
    return val === oldVal;
};

module.exports = { generatePBKDF2, generateSalt, valiPBKDF2 };
