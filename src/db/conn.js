const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/olympics')
.then(()=>{
    console.log("connection is successfully setup");
}).catch((err)=>{
    console.log(err);
    console.log("connection failed");
})