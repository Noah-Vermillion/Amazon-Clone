$(document).ready(function(){

	$.get("/userInfo",function(data){
    if(data != null){
  		if (data.username){
        console.log("Inside get userinfo after sign in");
  			$("#username").attr('href' , "account");
				$("#username").html( data.username);
  		}
      else{
        console.log("Not Inside userinfo after sign in");
      }
    }
	});
});
