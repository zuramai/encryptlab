let express = require('express');
let router = express.Router();
const { aes } = require('../src');

/* POST Encrypt. */
router.post('/encrypt', async function(req, res, next) {
    if(!req.body.data 
        || !req.body.bit
        || !req.body.mode
        || !req.body.key
        || !req.body.iv)
        return res.status(422).json({
            message: "Please fill all the field.",
        });

    try{
        const encrypted = await aes.encrypt(req.body.data,req.body.bit,req.body.mode,Buffer.from(req.body.key),Buffer.from(req.body.iv));
        
        return res.status(200).json({
            message: encrypted,
        });
    }catch(e){
        return res.status(422).json({
            message: e,
        });
    }

});

/* POST Decrypt. */
router.post('/decrypt', async function(req, res, next) {
    if(!req.body.data 
        || !req.body.bit
        || !req.body.mode
        || !req.body.key
        || !req.body.iv)
        return res.status(422).json({
            message: "Please fill all the field.",
        });

    try{
        const decrypted = await aes.decrypt(req.body.data,req.body.bit,req.body.mode,Buffer.from(req.body.key),Buffer.from(req.body.iv));
        
        return res.status(200).json({
            message: decrypted,
        });
    }catch(e){
        return res.status(422).json({
            message: e,
        });
    }
});

module.exports = router;
