const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

//suhastatte17
//c99HVXv2hsg1a4UQ

app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect('mongodb+srv://suhastatte17:c99HVXv2hsg1a4UQ@recipe-app.nsuo7.mongodb.net/Recipe-app?retryWrites=true&w=majority&appName=Recipe-app');

  app.get('/', (req, res) => {
    res.send('Veggify Recipe App server is running!')
  })
}
main().then(()=> console.log("MongoDB connected successfully!")).catch(err => console.log(err));

const ItemRoutes = require('./src/routes/itemRoutes');
app.use('/api',ItemRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})