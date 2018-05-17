
$(document).ready(function(){

	$.get("/userInfo",function(data){
		if (data.username){
			$("#username").href="account";
			$("#username").html( data.username);
		}
	});
});
