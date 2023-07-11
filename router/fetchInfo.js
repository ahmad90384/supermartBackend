const express = require("express");
const router = express.Router();
const Users = require("../model/userModel");
const Orders = require("../model/ordersModel");
const Products = require("../model/productModel");

//fetch users info
router.get("/api/users", async (req, res) => {
  try {
    const users = await Users.find({});
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// fetch all the products
router.get("/api/products", async (req, res) => {
  try {
    const products = await Products.find({});
    res.send(products);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

// fetch single user
router.get("/api/users/:id", async (req, res) => {
  try {
    const users = await Users.findById({ _id: req.params.id });
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

// fetching all orders
router.get("/orders", async (req, res) => {
  try {
    const orders = await Orders.find({});
    res.send(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

// update order
router.put("/approveOrder", async (req, res) => {
  const { id, updateStatus } = req.body;
  const updatedOrder = await Orders.findByIdAndUpdate(
    id,
    { status: updateStatus },
    { new: true }
  );
  res.json(updatedOrder);
});

// reject order
router.put("/rejectOrder", async (req, res) => {
  const { id, updateStatus } = req.body;
  const updatedOrder = await Orders.findByIdAndUpdate(
    id,
    { status: updateStatus },
    { new: true }
  );
  res.json(updatedOrder);
});

module.exports = router;
