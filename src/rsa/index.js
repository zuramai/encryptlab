const crypto = require("crypto");

module.exports.encrypt = async (data,publicKey) => {
    const buffer = Buffer.from(data);
    const encrypted = crypto.publicEncrypt(publicKey, buffer);

    return encrypted.toString("base64");
}

module.exports.decrypt = async (data,privateKey) => {
    const buffer = Buffer.from(data, "base64");
    const decrypted = crypto.privateDecrypt(privateKey, buffer);

    return decrypted.toString("utf8");
}