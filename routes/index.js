var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile('index.html');
});

router.post('/', function (req, res, next) {
  const orderData = {
    ...req.body,
    ...generatePurchaseTime(),
  };

  console.table(orderData);

  res.json(orderData);
});

router.post('/create-five-hundred', function (req, res, next) {
  const orderData = {
    ...req.body,
    ...generatePurchaseTime(),
  };

  Order.create(orderData, (err, order) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(order);
    }
  });
});

module.exports = router;
