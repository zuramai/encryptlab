const express = require('express');
const router = express.Router();
const { tripleDes } = require('../src');

/* POST Encrypt. */
router.post('/encrypt', async function(req, res, next) {
    if(!req.body.data || !req.body.key)
        return res.status(422).json({
            message: "Please fill all the field.",
        });

    try{
        const encrypted = await tripleDes.encrypt(req.body.data,req.body.key);

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
    if(!req.body.data || !req.body.key)
        return res.status(422).json({
            message: "Please fill all the field.",
        });

    try{
        const decrypted = await tripleDes.decrypt(req.body.data,req.body.key);

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
