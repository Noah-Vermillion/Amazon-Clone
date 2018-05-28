function buttonClicked(){
  console.log("The objects price is " + $('#price').val());
  console.log("The objects name is " + $('#name').val());
  $.ajax({
    url: "/addUserItem",
    type: "POST",
    data: {name:$("#name").val(),img:$("#image").attr("src"),price:$("#price").val(),dsc:$("#desc").val()},
    success: function(data){
      if(!data)
        alert("NOT ADDED TO CART");
      else{
        alert("ADDED TO CART");
      }
    },
    dataType: "json"
  });
}

$(document).ready(function(){
  $.get("/searchName",function(data){
    if(!data)
      alert("ERROR LOAD");
    else{
      // alert("LOADING ITEM");
      console.log(data.name + " ++ " + data.price + " ++ " + data.desc);
      $("#name").html(data.name);
      $("#price").html(data.price);
      $("#desc").html(data.desc);
      $("#name").val(data.name);
      $("#price").val(data.price);
      $("#desc").val(data.desc);
      $("#image").attr("src",data.img);
      console.log("Inside searchName name " + $("#name").val());
    }
  });


  $.get("/userInfo",function(data){
    if(data != null)
    {
      if (data.username){
        $("#username").attr('href' , "../account");
        $("#username").html( data.username);
      }
    }
	});
  $('#butn').click(buttonClicked);
});
