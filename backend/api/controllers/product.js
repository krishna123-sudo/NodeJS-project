const Products=require('../models/products');

exports.get_all_product=(req,res,next)=>{
    Products.find()
            .exec()
            .then(doc=>{
                console.log(doc);
                res.status(200).json(doc);
            }).catch(err=>{
                console.log(err);
            })
}

exports.post_product=(req,res,next)=>{
    console.log(req.file);
    const product=new Products({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        price:req.body.price
    });
    product.save().then(result=>{
        console.log(result);
    }).catch(err=>console.log(err));
    res.status(200).json({
        message:"handling Post Request to /product",
        createProduct:product   
    })
}

exports.get_productbyid=(req,res,next)=>{
    const id=req.params.productId;
    Products.findById(id)
            .exec()
            .then(doc=>{
                console.log(doc);
                res.status(200).json(doc);
            })
            .catch(err=>console.log(err));   
}

exports.product_update=(req,res,next)=>{
    const id=req.params.productId;
    Products.findByIdAndUpdate(id,req.body,{new:true})
            .exec()
            .then(result=>{
                console.log(result);
                res.status(200).json(result);
            })
            .catch(err=>{
                console.log(err);
            })
            
}
exports.delete_byId=(req,res,next)=>{
    const id=req.params.productId;
    Products.findByIdAndDelete(id)
            .exec()
            .then(result=>{
                res.status(200).json(result)
            })
            .catch(err=>{
                console.log(err);
            })

}