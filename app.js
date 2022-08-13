const express = require('express');
const productRoute = require('./routes/productRoute');
const cartRoute = require('./routes/cartRoute');

const app = express();

/* Middleware */
app.use(express.json());
app.use((req, res, next) => {
  console.log('Hello middleware...👋');
  next();
});

app.use('/api/v1/product', productRoute);
app.use('/api/v1/cart', cartRoute);

const port = '3000';
app.listen(port, () => {});
