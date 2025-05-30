const express = require('express');
const router = express.Router();

const {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
} = require('../controllers/order.controller');

router
    .route('/')
    .get(getAllOrders)
    .post(createOrder);

router
    .route('/:id')
    .get(getOrderById)
    .put(updateOrder)
    .delete(deleteOrder);

module.exports = router;