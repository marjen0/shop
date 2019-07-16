const express = require('express');
const router = express.Router({mergeParams: true});
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

const User = require('../../models/user');

router.post('/register', (req,res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({message: 'Užpildykite visus laukelius.'})
    }
    User.findOne({email: email})
    .then(user => {
        if (user) {
            return res.status(400).json({message: "Toks vartotojas jau egzistuoja"})
        } else {
            const newUser = new User({email,password})
            //create salt and hash
            const saltRounds = parseInt(config.get('auth.saltRounds'))
            bcrypt.genSalt(saltRounds, (err,salt) => {
                bcrypt.hash(newUser.password, salt, (err,hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save().then(user => {
                        jwt.sign({
                            id: user.id,
                            email: user.email
                        }, config.get('auth.jwtSecret'), {expiresIn: 36000}, (err,token) => {
                            if (err) throw err;
                            res.status(200).json({
                                token: token,
                                user: {
                                    id: user.id,
                                    email: user.email
                                }
                            });
                        });       
                    })
                });
            });
        }
    })
    .catch(error => {
        console.log(error);
    });
    
});
//------------------LOGIN-------------------------
router.post('/login', (req,res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({message: "Užpildykite visus laukelius"});
    }
    User.findOne({email: email}, (err, user) => {
        if (err) {
            console.log(err);
            throw err;
        }
        if (!user) {
            return res.status(400).json({message: "Toks el. pašto adresas neegzistuoja"});
        }
        bcrypt.compare(password,user.password, (err, success) => {
            if (success) {
                jwt.sign({
                    id: user.id,
                    email: user.email
                }, 
                config.get('auth.jwtSecret'), {expiresIn: 36000}, (err,token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token: token,
                        user: {
                            id: user.id,
                            email: user.email
                        }
                    });
                });    
            } else {
                return res.status(400).json({message: 'Įvestas neteisingas slaptažodis'});
            }
        });
    });
});

router.get('/user', auth, (req,res) => {
    User.findById(req.user.id, (err, user) => {
        if (!err) {
            return res.status(200).json({user:user});
        } else {
            return res.status(400).json({message: 'Nepavyko rasti vartotojo'})
        }
    });
});


module.exports = router;