const crypto = require("crypto");

module.exports.encrypt = (data, key) => {
  const md5Key = crypto.createHash('md5').update(key).digest("hex").substr(0, 24);

  const cipher = crypto.createCipheriv('des-ede3', md5Key, '');

  let encrypted = cipher.update(data, 'utf8', 'base64');
  encrypted += cipher.final('base64');

  return encrypted;
}

module.exports.decrypt = (data, key) => {
  const md5Key = crypto.createHash('md5').update(key).digest("hex").substr(0, 24);

  const decipher = crypto.createDecipheriv('des-ede3', md5Key, '');

  let decrypted = decipher.update(data, 'base64', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}