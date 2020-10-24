let express = require('express');
let router = express.Router();
const { blowfish } = require('../src');

/* POST Encrypt. */
router.post('/encrypt', function(req, res, next) {
    if(!req.body.data
        || !req.body.mode
        || !req.body.key
        || !req.body.iv)
        return res.status(422).json({
            message: "Please fill all the field.",
        });

    const encrypted = blowfish.encrypt(req.body.data,req.body.mode,req.body.key,req.body.iv);

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
        || !req.body.mode
        || !req.body.key
        || !req.body.iv)
        return res.status(422).json({
            message: "Please fill all the field.",
        });

    const decrypted = blowfish.decrypt(req.body.data,req.body.mode,req.body.key,req.body.iv);

    if(!decrypted)
        return res.status(422).json({
            message: "Encrypt failed."
        });
    
    return res.status(200).json({
        message: decrypted,
    });
});

module.exports = router;
