const mongoose = require('mongoose')


const transSchema = new mongoose.Schema(
    {
        millName : String , 
        storeName : String , 
        item : String , 
        price : Number,
        quantity : Number, 
    } , {timestamps:true})



 module.exports = mongoose.model('TransactionDetail' , transSchema)
 