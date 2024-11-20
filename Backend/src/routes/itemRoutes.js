const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/itemController');

// Existing routes
router.get("/all-items", ItemController.getAllItems);
router.get("/items", ItemController.getSearchedItems);
router.get("/items/:id", ItemController.getSingleItem);

// New routes for adding, editing, and deleting recipes
router.post("/items", ItemController.addItem); // Add recipe
router.put("/items/:id", ItemController.editItem); // Edit recipe
router.delete("/items/:id", ItemController.deleteItem); // Delete recipe

module.exports = router;