const Item = require('../models/Itemodel');

const addItem = async (req, res) => {
    const newItem = new Item(req.body);
    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ message: "Error adding recipe" });
    }
};

const editItem = async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: "Error editing recipe" });
    }
};

const deleteItem = async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Recipe deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting recipe" });
    }
};

module.exports = {
    getAllItems,
    getSearchedItems,
    getSingleItem,
    addItem,
    editItem,
    deleteItem
};