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

module.exports = {
    getAllItems,
    getSearchedItems
}