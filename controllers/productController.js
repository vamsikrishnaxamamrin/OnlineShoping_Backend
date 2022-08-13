const fs = require('fs');

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev_data/data/products.json`)
);

exports.checkId = (req, res, next, value) => {
  const product = products.find((x) => x.id === parseInt(value));
  if (!product) {
    return res.status(404).json({
      status: 'failure',
      message: 'Invalid id',
    });
  }
  next();
};

exports.getAllProducts = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: products?.length,
    data: { products },
  });
};

exports.getProduct = (req, res) => {
  const product = products.find((x) => x.id === parseInt(req.params.id));

  res.status(200).json({
    status: 'success',
    data: { product },
  });
};

exports.createProduct = (req, res) => {
  const newId = products[products.length - 1].id + 1;
  const newProduct = {
    id: newId,
    ...req.body,
  };
  products.push(newProduct);

  fs.writeFile(
    `${__dirname}/dev_data/data/products.json`,
    JSON.stringify(products),
    (err) => {}
  );

  res.status(201).json({
    status: 'success',
    data: { product: newProduct },
  });
};

exports.updateProduct = (req, res) => {
  const product = products.find((x) => x.id === parseInt(req.params.id));

  const updatedProduct = { ...product, ...req.body };
  const finalProducts = products.map((pro) =>
    updatedProduct.id === pro.id ? updatedProduct : pro
  );

  fs.writeFile(
    `${__dirname}/dev_data/data/products.json`,
    JSON.stringify(finalProducts),
    (err) => {}
  );

  res.status(200).json({
    status: 'success',
    data: {
      product: updatedProduct,
    },
  });
};

exports.deleteProduct = (req, res) => {
  const product = products.find((x) => x.id === parseInt(req.params.id));

  const index = products.indexOf(product);
  products.splice(index, 1);
  fs.writeFile(
    `${__dirname}/dev_data/data/products.json`,
    JSON.stringify(products),
    (err) => {}
  );

  res.status(204).json({
    status: 'success',
    data: null,
  });
};
