



function logoutClicked(){
	$.get("/logout",function(data){
		window.location = data.redirect;
	});
	return false;
}


$(document).ready(function(){

	$.get("/userInfo",function(data){
		if (data.username)
			$("#username").html( data.username);
	});

	$("#logout").click(logoutClicked);

});
