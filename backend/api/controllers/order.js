const Order=require('../models/orders');

exports.order_get_all=(req,res,next)=>{
    Order.find()
          .exec()
          .then(docs=>{
            console.log(docs);
            res.status(200).json(docs);
          })
          .catch(err=>{
            console.log(err);
          })
}

exports.order_post=(req,res,next)=>{
    const order=new Order({
       _id:new mongoose.Types.ObjectId(),
        quantity:req.body.quantity,
        product:req.body.productId
    })
    order.save()
         .then(result=>{
        console.log(result);
        res.status(201).json(result);
    })
         .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
   
}

exports.order_getbyid=(req,res,next)=>{
    const id=req.params.orderId
    Order.findById(id)
        .then(result=>{
            console.log(result);
            res.status(200).json(result);
        }).catch(err=>{
            console.log(err);
        })
}

exports.order_delete=(req,res,next)=>{
    const id=req.params.orderId
    Order.findByIdAndDelete(id)
        .then(result=>{
            console.log(result);
            res.status(200).json(result);
        }).catch(err=>{
            console.log(err); 
        })
}