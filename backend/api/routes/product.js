const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const multer=require('multer');
const checkAuth=require('../middleware/check-auth')

const productControllers=require('../controllers/product');

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/')
    },
    filename:function(req,file,cb){
        cb(null,new Date().toISOString()+file.originalname);
    }
});

const upload=multer({storage:storage,limits:{
    fileSize:1024*1024*5
}})

const Products=require('../models/products');

router.get('/',productControllers.get_all_product);

router.post('/',upload.single('file'),checkAuth,productControllers.post_product);

router.get('/:productId',productControllers.get_productbyid);

router.patch('/:productId',checkAuth,productControllers.product_update);

router.delete('/:productId',checkAuth,productControllers.delete_byId);

module.exports=router;