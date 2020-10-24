let express = require('express');
let router = express.Router();
const { rsa } = require('../src');

/* POST Encrypt. */
router.post('/encrypt', function(req, res, next) {
    if(!req.body.data 
        || !req.body.key)
        return res.status(422).json({
            message: "Please fill all the field.",
        });

    const encrypted = rsa.encrypt(req.body.data,req.body.key);

    if(!encrypted)
        return res.status(422).json({
            message: "Encrypt failed."
        });
    
    return res.status(200).json({
        message: encrypted,
    });
});

/* POST Decrypt. */
router.post('/decrypt', function(req, res, next) {
    if(!req.body.data 
        || !req.body.key)
        return res.status(422).json({
            message: "Please fill all the field.",
        });

    const decrypted = rsa.decrypt(req.body.data,req.body.key);

    if(!decrypted)
        return res.status(422).json({
            message: "Encrypt failed."
        });
    
    return res.status(200).json({
        message: decrypted,
    });
});

module.exports = router;
