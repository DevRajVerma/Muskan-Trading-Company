const mongoose = require('mongoose');


const connectDB = async () => {
    console.log(process.env.MONGODB_URI)
    try{
    await mongoose.connect(process.env.MONGODB_URI);
        console.log('DB connected successfully')
    }catch(error){
        console.log('DB connection failed');
        console.error(error);

    }
}

module.exports = connectDB;