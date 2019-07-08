const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const config = require('config');

const indexRoutes = require('./routes/api/index');
const usersRoutes = require('./routes/api/users');

mongoose.connect(config.get('dbConfig.URL'), {useNewUrlParser: true, useCreateIndex:true})
.then(()=> console.log('MongoDB connected'))
.catch(error => console.error('could no connect to mongoDB',error));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('tiny'));

app.use('/api', indexRoutes);
app.use('/api/users', usersRoutes);


const port = 5000;
const ip = process.env.IP;
app.listen(port,ip, () => console.log(`Server running on port ${port}`));