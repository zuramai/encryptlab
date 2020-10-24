const crypto = require('crypto');

module.exports.encrypt = (data,bit,mode,enc_key,iv) => {
    const cipher = crypto.createCipheriv('aes-'+bit+'-'+mode, enc_key, iv);

    let encrypted = cipher.update(data, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
}

module.exports.decrypt = (data,bit,mode,enc_key,iv) => {
    const decipher = crypto.createDecipheriv('aes-'+bit+'-'+mode, enc_key, iv);

    let decrypted = decipher.update(data, 'base64', 'utf8');
    decrypted += decipher.final();

    return decrypted;
}