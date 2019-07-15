const express = require('express');
const router = express.Router({mergeParams:true});
const Item = require('../../../models/Item/item');

router.get('/', async (req,res) => {
    try {
        const items = await Item.find();
        return res.status(200).json({items: items})
    } catch(e) {
        console.error('items at /', e);
    }
});

module.exports = router;