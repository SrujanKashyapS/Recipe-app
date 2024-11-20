const Item = require('../models/Itemodel');

const getAllItems = async(req,res) => {
    const result = await Item.find().sort({creatAt: -1});
    res.status(200).json(result)
}
const getSearchedItems = async(req,res) => {
    const {q} = req.query;
    try {
        let items;
        if(q){
            items = await Item.find({ name: { $regex: q, $options: 'i'} })
        }
        res.status(200).json(items)
    } catch (error) {
        res.status(500).json({message: "No item found!"})
    }
}
const getSingleItem = async(req,res) => {
    const {id} = req.params;
    try {
        const item = await Item.findById(id);
        res.json(item)
    } catch (error) {
        res.status(500).json({message: "No item found!"})
    }
}

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