

var mongoose = require("mongoose");

var itemSchema = mongoose.Schema({
	name: {
		required: true,
		unique: true,
		type:String
	},
	
});

var Items = mongoose.model("Items", itemSchema);



module.exports = Items;
