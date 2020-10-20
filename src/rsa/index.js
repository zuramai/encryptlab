const crypto = require("crypto");
const path = require("path");
const fs = require("fs");

const publicKey = fs.readFileSync(path.resolve(__dirname + '/../public-key.pem'), "utf8");
const privateKey = fs.readFileSync(path.resolve(__dirname + '/../private-key.pem'), "utf8");

module.exports.encrypt = (data) => {
    const buffer = Buffer.from(data);
    const encrypted = crypto.publicEncrypt(publicKey, buffer);

    return encrypted.toString("base64");
}

module.exports.decrypt = (data) => {
    const buffer = Buffer.from(data, "base64");
    const decrypted = crypto.privateDecrypt(privateKey, buffer);

    return decrypted.toString("utf8");
}