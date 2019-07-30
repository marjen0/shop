const express = require('express');
const router = express.Router({mergeParams:true});
const User = require('../../models/user');
const Item = require('../../models/Item/item');
const Order = require('../../models/order');
const { authenticate } = require('../../middleware/auth');

router.get('/', async (req,res) => {
    try {
        const orders = await Order.getAllOrders();
        res.status(200).json({orders:orders});
    } catch (error) {
        console.log('at get /orders', error);
        res.status(500).json({ message: 'Įvyko klaida'});
    }
});
router.post('/', authenticate, async (req,res) => {
    try {
        const items = req.body.items;
        let totalPrice = 0;
        items.forEach(async item => {
            totalPrice += item.totalPrice;
            Item.bought(item._id, item.amount);
        });
        const newOrder = new Order({
            items: items,
            totalPrice: totalPrice,
            user: req.user.id
        });
        await newOrder.save();


        return res.status(201).json({message: 'Užsakymas pridėtas'});
    } catch (error) {
        console.error('at post /orders',error);
        res.status(500).json({message: 'Įvyko klaida'})
    }
});


module.exports = router;