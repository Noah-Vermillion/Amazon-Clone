<<<<<<< HEAD
=======
function buttonClicked() {
	console.log($('#price').val());


	$.ajax({
		url: "../addUserItem",
		type: "POST",
		data: {
			name: "Football",
			img: "/public/images/waifu1",
			price: 9.99,
			dsc: "Hello"
		},
		success: function(data) {
			if (!data)
				alert("NOT ADDED TO CART");
			else {
				alert("ADDED TO CART");
			}
		},
		dataType: "json"
	});
}

>>>>>>> ebd87bafb0dba71a53cbc986e5f3553b36f1ae52
function logoutClicked() {
	$.ajax({
		url: "/logout",
		type: "GET",
		success: function(data) {
			console.log("Sucess Function");
			console.log(data);
			if (!data || data == undefined) {
				console.log("I am not logging out.");
				alert("ERROR");
			} else {
				console.log("I am logging out");
				window.location = data.redirect;
			}
		},
		dataType: "json"
	});
}

function addItemClicked() {
	window.location = "../addItem";
}
$(document).ready(function() {
	$.ajax({
		url: "/userInfo",
		type: "GET",
		success: function(data) {
			console.log("Sucess Function");
			console.log(data);
			if (!data || data == undefined) {
				console.log("I am not in the change of info.");
				alert("ERROR");
			} else {
				console.log("I am changing the info");
				console.log(data.username);
<<<<<<< HEAD
				$("#name").html(data.username + "\'s account page");
=======
				$("#name").html(data.username + " account page");
>>>>>>> ebd87bafb0dba71a53cbc986e5f3553b36f1ae52
			}
		},
		dataType: "json"
	});
	////////
	$("#logout").click(logoutClicked);
	$("#addItem").click(addItemClicked);
});
