const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const productSchema=new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const Products=mongoose.model('Products',productSchema);
module.exports=Products
