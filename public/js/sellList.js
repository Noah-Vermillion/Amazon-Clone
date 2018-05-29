let idClicked;

if (isMobileDevice()) {
  window.location.href = window.location + "/mobile";
}

function loadPage() {
  console.log("I have loaded the User Sell page");
  $.ajax({
    url: "/getUserSellItemList",
    type: "GET",
<<<<<<< HEAD
    success: function(info) {
      console.log("load page" + info);
      if (!info)
        alert("ERROR INFO");
      else {
        for (let i = 0; i < info.length; i++) {
          if (info[i] != null || info[i] != undefined) {
            console.log(info[i]);
            $("#list").append(
              "<input id=" + info[i].name +
              " class='tempImg' type='image' src= " + info[i].image +
              " height='200' width='200' border='5' onClick='changeCurr(this)'/>" +
              "<p class='description'>" + "Name: " + info[i].name +
              "<br>" + "Price: $" + info[i].price + "<br>" + "Desc: " +
              info[i].desc + "</p><br>");
          }
=======
    success: function(data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i] != null || data[i] != undefined) {
          $("#list").append(
            "<input id=" + data[i].name +
            " class='tempImg' type='image' src= " + data[i].img +
            " height='200' width='200' border='5' onClick='changeCurr(this)'/>" +
            "<p class='description'>" + "Name: " + data[i].name +
            "<br>" + "Price: $" + data[i].price + "<br>" + "Desc: " +
            data[i].desc + "</p><br>");
>>>>>>> ebd87bafb0dba71a53cbc986e5f3553b36f1ae52
        }
      }
    },
    dataType: "json"
  });
  return false;

}

function changeCurr(e) {
  console.log($(e).attr("id"));
  idClicked = $(e).attr("id");
  console.log(idClicked);
  itemClicked();
}

function itemClicked() {
  //directs you to a certain image's route
  alert("redirect me");
  $.ajax({
    url: "/loadItem",
    type: "POST",
    data: {
      itemID: idClicked
    },
    success: function(data) {
      if (!data)
        alert("ERROR LOAD");
      else
        console.log("Good Load");
    },
    dataType: "json"
  });
  window.location = "itemPage";
}

$(document).ready(function() {
  $.get("/userInfo", function(data) {
<<<<<<< HEAD
    if (data != null) {
      if (data.username) {
        $("#username").attr('href', "/account");
        $("#username").html(data.username);
      }
    }
=======
    if (data.username)
      $("#username").html(data.username);
>>>>>>> ebd87bafb0dba71a53cbc986e5f3553b36f1ae52
  });
  loadPage();
  $('.tempImg').click(itemClicked);
});
