const fs = require('fs');

const carts = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev_data/data/carts.json`)
);

exports.getAllCarts = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Invalid route',
  });
};

exports.getCart = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Invalid route',
  });
};

exports.createCart = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Invalid route',
  });
};

exports.updateCart = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Invalid route',
  });
};

exports.deleteCart = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Invalid route',
  });
};
