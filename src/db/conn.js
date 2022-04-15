const mongoose = require('mongoose');

const DB = 'mongodb+srv://mongodbrishab:mongodb010203@cluster0.7hzbu.mongodb.net/test';

mongoose.connect(DB, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=> {
    console.log(`connection successfull`);
}).catch((err)=> console.log(err));