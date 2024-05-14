const express=require('express');
const router=express.Router();
const Order=require('../models/orders');
const mongoose=require('mongoose');
const checkAuth=require('../middleware/check-auth');

const OrderControllers=require('../controllers/order');
router.get('/',checkAuth,OrderControllers.order_get_all);

router.post('/',checkAuth,OrderControllers.order_post);

router.get('/:orderId',checkAuth,OrderControllers.order_getbyid);

router.delete('/:orderId',checkAuth,OrderControllers.order_delete);

module.exports=router;