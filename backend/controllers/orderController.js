const Order = require('../models/order');

// Create a new order
exports.createOrder = async (req, res) => {
  const { user, products, total } = req.body;
  try {
    const order = new Order({ user, products, total });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('products.product');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
