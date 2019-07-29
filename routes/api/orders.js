const express = require('express');
const router = express.Router({mergeParams:true});
const mongoose = require('mongoose');
const User = require('../../models/user');
const Item = require('../../models/Item/item');
const Order = require('../../models/order');
const { authenticate } = require('../../middleware/auth');

router.get('/', async (req,res) => {
    try {
        const orders = Order.getAllOrders();
        res.status(200).json({orders:orders});
    } catch (error) {
        console.log('at get /orders', error);
        res.status(500).json({ message: 'Įvyko klaida'});
    }
});
router.post('/', authenticate, async (req,res) => {
    try {
        const {items} = req.body;
        let totalPrice = 0;
        items.forEach(item => {
            totalPrice += item.totalPrice;
            Item.incrementPurchasedCount(item._id)
        });
        const newOrder = new Order({
            items: items,
            totalPrice: totalPrice,
        });
        const savedOrder = await newOrder.save();
        User.pushOrder(req.user.id, savedOrder._id);
        res.status(201).json({items:items});
    } catch (error) {
        console.error('at post /orders',error);
        res.status(500).json({message: 'Įvyko klaida'})
    }
});


module.exports = router;