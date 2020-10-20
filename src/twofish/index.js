const { twofish } = require('twofish');
const encrypter = twofish();

module.exports.encrypt = (data,secret_key) => {
    const secretKey = Buffer.from(secret_key);
    const plainText = Buffer.from(data);
    const cypherText = encrypter.encrypt(secretKey, plainText);

    return cypherText;
}

module.exports.decrypt = (data,secret_key) => {
    const secretKey = Buffer.from(secret_key);
    const cypherText = Buffer.from(data);
    const plainText = encrypter.decrypt(secretKey, cypherText);

    return Buffer.from(plainText).toString('ascii');
}