const crypto = require('crypto');

module.exports.encrypt256 = (data,mode,enc_key,iv) => {
    const cipher = crypto.createCipheriv('aes-256-'+mode, enc_key, iv);

    let encrypted = cipher.update(data, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
}

module.exports.decrypt256 = (data,mode,enc_key,iv) => {
    const decipher = crypto.createDecipheriv('aes-256-'+mode, enc_key, iv);

    let decrypted = decipher.update(data, 'base64', 'utf8');
    decrypted += decipher.final();

    return decrypted;
}

module.exports.encrypt192 = (data,mode,enc_key,iv) => {
    const cipher = crypto.createCipheriv('aes-192-'+mode, enc_key, iv);

    let encrypted = cipher.update(data, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
}

module.exports.decrypt192 = (data,mode,enc_key,iv) => {
    const decipher = crypto.createDecipheriv('aes-192-'+mode, enc_key, iv);

    let decrypted = decipher.update(data, 'base64', 'utf8');
    decrypted += decipher.final();

    return decrypted;
}

module.exports.encrypt128 = (data,mode,enc_key,iv) => {
    const cipher = crypto.createCipheriv('aes-128-'+mode, enc_key, iv);

    let encrypted = cipher.update(data, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
}

module.exports.decrypt128 = (data,mode,enc_key,iv) => {
    const decipher = crypto.createDecipheriv('aes-128-'+mode, enc_key, iv);

    let decrypted = decipher.update(data, 'base64', 'utf8');
    decrypted += decipher.final();

    return decrypted;
}