if (isMobileDevice()) {
  window.location.href = window.location + "/mobile";
}

function getCategory() { //edited
  console.log("I have loaded the page");
  $.ajax({
    url: "/getCategory",
    type: "GET",
    success: function(data) {
      if (!data)
        alert("NO CATEGORY");
      else {
        if (data.category == "misc") {
<<<<<<< HEAD
          $("#resHeading").html("Results for Miscellaneous");
        } else if (data.category == "sports") {
          $("#resHeading").html("Results for Sports");
        } else if (data.category == "animals") {
          $("#resHeading").html("Results for Animals");
        } else if (data.category == "electronics") {
          $("#resHeading").html("Results for Electronics");
        }
=======
          data.category = "Miscellaneous";
        } else if (data.category == "sports") {
          data.category = "Sports";
        } else if (data.category == "animals") {
          data.category = "Animals";
        } else if (data.category == "electronics") {
          data.category = "Electronics";
        }

        $("#resHeading").html("Results for " 
          data.category);
>>>>>>> ebd87bafb0dba71a53cbc986e5f3553b36f1ae52
        loadPage(data.category);
      }
    }
  });
  return false;
}

function getifSearched() { //edited
  $.ajax({
    url: "/getifSearched",
    type: "GET",
    success: function(data) {
      if (!data)
        alert("NO CATEGORY");
      else {
        if (data.search) {
          loadPage2(data.csearch);
        } else
          getCategory();

      }
    }
  });
  return false;
}

function loadPage2(curr) {
<<<<<<< HEAD
  $.get("/getItemDB/" + curr, success);
=======
  $.get("/getItemDB/",
    curr, success);
>>>>>>> ebd87bafb0dba71a53cbc986e5f3553b36f1ae52
}

function success(data) {
  console.log(data);
<<<<<<< HEAD
  for (let i = 0; i < data.length; i++) {
    if (data[i] != null || data[i] != undefined) {
      $("#list").append(
        "<input id='" + data[i].name + "' class='tempImg' type='image' src= " +
        data[i].img +
        " height='200' width='200' border='5' onClick='changeCurr(this)'/>" +
        "<p class='description'>" + "Name: " + data[i].name + "<br>" +
        "Price: $" + data[i].price + "<br>" + "Desc: " + data[i].desc +
        "</p><br>");
=======
  for (let i = 0; i < data.length; i) {
    if (data[i] != null || data[i] != undefined) {
      $("#list").append(
        "<input id='" +
        data[i].name + "' class='tempImg' type='image' src= " +
        data[i].img +
        " height='200' width='200' border='5' onClick='changeCurr(this)'/>" +
        "<p class='description'>" +
        "Name: " +
        data[i].name + "<br>" +
        "Price: $" +
        data[i].price + "<br>" +
        "Desc: " +
        data[i].desc + "</p><br>");
>>>>>>> ebd87bafb0dba71a53cbc986e5f3553b36f1ae52
    }
  }
}

function loadPage(current) {
<<<<<<< HEAD
  console.log("++++++++++++++ " + current);
=======
  console.log("               ",
    current);
>>>>>>> ebd87bafb0dba71a53cbc986e5f3553b36f1ae52
  $.ajax({
    url: "/search",
    type: "GET",
    success: function(data) {
<<<<<<< HEAD
      for (let i = 0; i < data.length; i++) {
        if (data[i] != null || data[i] != undefined) {
          if (data[i].category == current) {
            $("#list").append(
              "<input id='" + data[i].name +
              "' class='tempImg' type='image' src= " + data[i].img +
              " height='200' width='200' border='5' onClick='changeCurr(this)'/>" +
              "<p class='description'>" + "Name: " + data[i].name +
              "<br>" + "Price: $" + data[i].price + "<br>" + "Desc: " +
=======
      for (let i = 0; i < data.length; i) {
        if (data[i] != null || data[i] != undefined) {
          if (data[i].category == current) {
            $("#list").append(
              "<input id='" +
              data[i].name + "' class='tempImg' type='image' src= " +
              data[i].img +
              " height='200' width='200' border='5' onClick='changeCurr(this)'/>" +
              "<p class='description'>" +
              "Name: " +
              data[i].name + "<br>" +
              "Price: $" +
              data[i].price + "<br>" +
              "Desc: " +
>>>>>>> ebd87bafb0dba71a53cbc986e5f3553b36f1ae52
              data[i].desc + "</p><br>");
          }
        }
      }
    },
    dataType: "json"
  });
}

function changeCurr(e) {
  // console.log($(e).attr("id"));
  let idClicked = $(e).attr("id");
  // console.log(idClicked);
  itemClicked(idClicked);
}

function itemClicked(name) {
  //directs you to a certain image's route
  // alert("redirect me");
  window.location = "../itemPage/"
  name;
}

$(document).ready(function() {
  $.get("/userInfo", function(data) {
    if (data != null) {
      if (data.username) {
<<<<<<< HEAD
        $("#username").attr('href', "/account");
=======
        $("#username").attr('href', "../account");
>>>>>>> ebd87bafb0dba71a53cbc986e5f3553b36f1ae52
        $("#username").html(data.username);
      }
    }
  });
  getifSearched();
  // $('.tempImg').click(itemClicked);
});
