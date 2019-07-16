const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const config = require('config');

const indexRoutes = require('./routes/api/index');
const authRoutes = require('./routes/api/authentication');
const userRoutes = require('./routes/api/users');
const itemsRoutes = require('./routes/api/items/items');
const itemCategoriesRoutes = require('./routes/api/items/categories');

mongoose.connect(config.get('dbConfig.URL'), {useNewUrlParser: true, useCreateIndex:true})
.then(()=> console.log('MongoDB connected'))
.catch(error => console.error('could no connect to mongoDB',error));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('tiny'));

app.use('/api', indexRoutes);
app.use('/api/items', itemsRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', itemCategoriesRoutes);
app.use('/api/authentication', authRoutes);


const port = 5000;
const ip = process.env.IP;
app.listen(port,ip, () => console.log(`Server running on port ${port}`));