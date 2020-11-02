const crypto = require("crypto");

module.exports.encrypt = async (data, key) => {
  const derivedKey = crypto.pbkdf2Sync(key, 'salt', 10000, 12, 'sha1');

  const cipher = crypto.createCipheriv('des-ede3', derivedKey.toString('hex'), '');

  let encrypted = cipher.update(data, 'utf8', 'base64');
  encrypted += cipher.final('base64');

  return encrypted;
}

module.exports.decrypt = async (data, key) => {
  const derivedKey = crypto.pbkdf2Sync(key, 'salt', 10000, 12, 'sha1');

  const decipher = crypto.createDecipheriv('des-ede3', derivedKey.toString('hex'), '');

  let decrypted = decipher.update(data, 'base64', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}