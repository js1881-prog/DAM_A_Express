const express = require('express');
const router = express.Router();
const passport = require('passport');
const orderController = require('../controller/orderController.js');
const { validateOrder } = require('../middleware/validate/schema/orderValidate.js');

// /order/
router.post('/',
  passport.authenticate('http-only-cookie-use-user', {
    session: false,
    failWithError: true,
  }),
  validateOrder,
  orderController.postOrder
);

module.exports = router;
