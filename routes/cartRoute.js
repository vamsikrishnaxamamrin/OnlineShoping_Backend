const express = require('express');

const {
  getAllCarts,
  getCart,
  createCart,
  updateCart,
  deleteCart,
} = require('../controllers/cartController');

const router = express.Router();

router.route('/').get(getAllCarts).post(createCart);
router.route('/:id').get(getCart).patch(updateCart).delete(deleteCart);

module.exports = router;
