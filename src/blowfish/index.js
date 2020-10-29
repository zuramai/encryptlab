const crypto = require('crypto');

module.exports.encrypt = async (data,mode,enc_key,iv) => {
    const cipher = crypto.createCipheriv('bf-'+mode, enc_key, iv);

    let encrypted = cipher.update(data, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
}

module.exports.decrypt = async (data,mode,enc_key,iv) => {
    const decipher = crypto.createDecipheriv('bf-'+mode, enc_key, iv);

    let decrypted = decipher.update(data, 'base64', 'utf8');
    decrypted += decipher.final();

    return decrypted;
}