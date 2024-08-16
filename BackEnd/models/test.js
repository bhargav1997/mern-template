const { mongoose } = require("mongoose");

//set up Schema and model
const testSchema = new mongoose.Schema({
   title: String,
   description: String,
   imgPath: String,
   ghLink: String,
   demoLink: String,
});

// Create Mongoose models for both collections
const Test = mongoose.model("<TableName>", testSchema);

module.exports = {
   Test,
};
