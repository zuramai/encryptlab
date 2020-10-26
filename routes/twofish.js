let express = require('express');
let router = express.Router();
const { twofish } = require('../src');

/* POST Encrypt. */
router.post('/encrypt', async function(req, res, next) {
    if(!req.body.data 
        || !req.body.key)
        return res.status(422).json({
            message: "Please fill all the field.",
        });

    try{
        const encrypted = await twofish.encrypt(req.body.data,req.body.key);
        
        return res.status(200).json({
            message: encrypted,
        });
    }catch(e){
        return res.status(422).json({
            message: Object.keys(e).length ? e.reason : "encrypt failed",
        });        
    }
});

/* POST Decrypt. */
router.post('/decrypt', async function(req, res, next) {
    if(!req.body.data 
        || !req.body.key)
        return res.status(422).json({
            message: "Please fill all the field.",
        });

    try{
        const decrypted = await twofish.decrypt(req.body.data,req.body.key);
        
        return res.status(200).json({
            message: decrypted,
        });
    }catch(e){
        return res.status(422).json({
            message: Object.keys(e).length ? e.reason : "decrypt failed",
        });        
    }
});

module.exports = router;
