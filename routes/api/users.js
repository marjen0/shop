const express = require('express');
const router = express.Router({mergeParams:true});
const bcrypt = require('bcryptjs');
const config = require('config');
const User = require('../../models/user');
const Order = require('../../models/order');
const {authenticate} = require('../../middleware/auth');

router.get('/', async (req,res) => {
    try {
        const users = await User.find();
        if (users) {
            return res.status(200).json({users: users});
        }
        return res.status(404).json({message: 'Nerasta vartotojų'});
    } catch (e) {
        console.error('at /users get' , e);
        res.status(500).json({message: 'Įvyko klaida. Bandykite dar kartą'});
    }
});
router.get('/user',authenticate,(req,res) => {
    User.findById(req.user.id).select('id email registerDate').then(user => res.json({user:user}))
});
router.get('/:id/orders',authenticate, async (req,res) => {
    try {
        const orders = await Order.getOrdersOfUser(req.user.id)
        return res.status(200).json({orders: orders});
    } catch (error) {
        return res.status(500).json({message: 'Įvyko klaida'});
    }
});
router.get('/:id', async (req,res)=> {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.json({message: 'Vartotojas nerastas'});
        }
        return res.status(200).json({user: user});
    } catch (e) {
        console.error('at users/:id', e);
        return res.status(500).json({error: 'Įvyko klaida. Bandykite dar kartą'});
    }
});
router.put('/:id', async (req,res) => {
    const { newPassword, oldPassword } = req.body;
    
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({message: 'Vartotojas nerastas'});
        }
        const success = await bcrypt.compare(oldPassword, user.password);
        if (!success) {
            return res.status(400).json({message: 'Įvestas neteisingas senas slaptažodis'});
        }
        const saltRounds = parseInt(config.get('auth.saltRounds'));
        const salt = await bcrypt.genSalt(saltRounds);
        const newHash = await bcrypt.hash(newPassword,salt);
        user.password = newHash;
        await user.save();
        return res.status(200).json({message: 'Slaptažodis sėkmingai pakeistas'});
    } catch (e) {
        console.error('at users/:id', e);
        return res.status(500).json({error: 'Įvyko klaida.'});
    }
});


module.exports = router;