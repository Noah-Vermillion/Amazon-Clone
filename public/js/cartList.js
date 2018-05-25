let idClicked;

function loadPage(){
  console.log("I have loaded the User Cart page");
  $.ajax({
    url: "/getUserItemList",
    type: "GET",
    success: function(info){
      console.log("load page" + info);
      if(!info)
        alert("ERROR INFO");
      else{
        // $("#list").append(info[1].name);
        getItemData(info);
      }
      // for(let i=0;i<data.length;i++){
      //   if(data[i] != null || data[i] != undefined){
      //     console.log(data[i]);
      //     $("#list").append(
      //       "<input id="+ data[i].name +" class='tempImg' type='image' src= "+ data[i].img +" height='200' width='200' border='5' onClick='changeCurr(this)'/>"
      //       + "<p class='description'>"
      //       + "Name: " + data[i].name + "<br>"
      //       + "Price: $" + data[i].price + "<br>"
      //       + "Desc: " + data[i].desc
      //       + "</p><br>");
      //   }
      // }
    } ,
    dataType: "json"
  });
  return false;

}

function getItemData(info){
  console.log("I am in getItemData in client");
  console.log("getItemData" + info);
  $.ajax({
    url: "/getuserItemData",
    type: "GET",
    data: {list:info},
    success: function(data){
      if(!data)
        alert("ERROR LOAD");
      else{
        console.log("++++++" + data);
        for(let i=0;i<data.length;i++){
          if(data[i] != null || data[i] != undefined){
            console.log(data[i]);
            $("#list").append("<p>"+ data[i].name + "</p>");
          }
        }
      }
    } ,
    dataType: "json"
  });
}

function changeCurr(e){
  console.log($(e).attr("id"));
  idClicked = $(e).attr("id");
  console.log(idClicked);
  itemClicked();
}
function itemClicked(){
  //directs you to a certain image's route
  alert("redirect me");
  $.ajax({
    url: "/loadItem",
    type: "POST",
    data: {itemID:idClicked},
    success: function(data){
      if(!data)
        alert("ERROR LOAD");
      else
        console.log("Good Load");
    } ,
    dataType: "json"
  });
  window.location = "itemPage";
}

$(document).ready(function(){
  $.get("/userInfo",function(data){
		if (data.username)
    $("#username").attr('href' , "account");
    $("#username").html( data.username);
	});
  loadPage();
  $('.tempImg').click(itemClicked);
});
