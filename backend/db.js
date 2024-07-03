const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://panchalfenil620:fF8nPwaIvd5aiMtP@cluster0.yghz766.mongodb.net/inotebook';

const connectToMongo = () =>{
    mongoose.connect(mongoURI).then(()=>console.log("Connected")).catch((e)=>console.log(e.message))
}

module.exports = connectToMongo;