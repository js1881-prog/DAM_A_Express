const express = require('express');
const router = express.Router();
const passport = require('passport');
const Order = require('../dao/orderdao/mongoose/model/orderModel.js');
const {
  Product,
} = require('../dao/productdao/mongoose/model/productModel.js');
const orderController = require('../controller/orderController.js');
const SoldProduct = require('../dao/soldproductdao/mongoose/model/soldproductModel.js');
const UserDAO = require('../dao/userdao/userDAO.js');
const {
  validateOrder,
} = require('../middleware/validate/schema/orderValidate.js');
const User = require('../dao/userdao/mongoose/model/userModel.js');
const buildResponse = require('../util/response/buildResponse.js');

// /order/
router.post(
  '/',
  passport.authenticate('http-only-cookie-use-user', {
    session: false,
    failWithError: true,
  }),
  validateOrder,
  orderController.postOrder
);

module.exports = router;
