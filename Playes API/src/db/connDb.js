const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/Olympics';

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Database connected!'))
    .catch(err => console.log(`Error connecting to database: ${err}`));