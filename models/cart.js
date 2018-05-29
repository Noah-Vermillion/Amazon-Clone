var mongoose = require("mongoose");

var cartSchema = mongoose.Schema({
	name: {
		required: true,
		type: String
	},
	user: {
		required: true,
		type: String
	},
	price: Number,
	desc: String,
<<<<<<< HEAD
	image: String
=======
	img: String
>>>>>>> ebd87bafb0dba71a53cbc986e5f3553b36f1ae52
});

var Cart = mongoose.model("Cart", cartSchema);



module.exports = Cart;
