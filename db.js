const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://jainaman2608:jain.aman2608@cluster0.s0ctgur.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const mongoDB = async () => {
  mongoose.connect(mongoURI).then(async () => {
   try {
    console.log("CONNECTED");
    let fetched_data = mongoose.connection.db.collection("fooditems");
    fetched_data = await fetched_data.find({}).toArray();
    global.fooditems = fetched_data;
    let foodCategory = mongoose.connection.db.collection("foodCategory");
    foodCategory = await foodCategory.find({}).toArray();
    global.foodCategory = foodCategory;
   } catch (error) {
    console.log("error")
   }
  });
};

module.exports = mongoDB;
