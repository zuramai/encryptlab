const { twofish } = require('twofish');
const encrypter = twofish();

module.exports.encrypt = async (data,secret_key) => {
    const secretKey = Buffer.from(secret_key);
    const plainText = Buffer.from(data);
    const cypherText = encrypter.encrypt(secretKey, plainText);
    const base64Cypher = Buffer.from(cypherText).toString("base64");

    return base64Cypher;
}

module.exports.decrypt = async (data,secret_key) => {
    const secretKey = Buffer.from(secret_key);
    const cypherText = Buffer.from(data,"base64");
    const plainText = encrypter.decrypt(secretKey, cypherText);

    return Buffer.from(plainText).toString('ascii');
}