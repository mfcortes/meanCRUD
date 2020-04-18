const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-crud';
mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true } )
    .then(db => console.log('DB COnect'))
    .catch(err => console.error(err));
    


module.exports = mongoose;
