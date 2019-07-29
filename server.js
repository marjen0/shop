const path = require('path');
const config = require('config');
const morgan = require('morgan');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userRoutes = require('./routes/api/users');
const indexRoutes = require('./routes/api/index');
const orderRoutes = require('./routes/api/orders');
const itemsRoutes = require('./routes/api/items/items');
const authRoutes = require('./routes/api/authentication');
const itemCategoriesRoutes = require('./routes/api/items/categories');

mongoose.connect(config.get('dbConfig.URL'), {useNewUrlParser: true, useCreateIndex:true})
.then(()=> console.log('MongoDB connected'))
.catch(error => console.error('could no connect to mongoDB',error));

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', indexRoutes);
app.use('/api/users', userRoutes);
app.use('/api/items', itemsRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/authentication', authRoutes);
app.use('/api/categories', itemCategoriesRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // set sttaic folder
    app.use(express.static('client/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build', 'index.html'))
    })
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));