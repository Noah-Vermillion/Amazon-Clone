<<<<<<< HEAD
$("#searchBar").keydown(function(event) {
  if (event.which === 13) {
    searchFor();
    console.log("pressed enter");
    event.preventDefault();
    return false;
  }
});

function searchFor() {
  window.location = "/list2/" + $("#searchBar").val();
=======
$("#searchBar").keydown( function( event ) {
          if ( event.which === 13 ) {
              searchFor();
              console.log("pressed enter");
              event.preventDefault();
              return false;
          }
      });
function searchFor(){
  window.location = "list2/" + $("#searchBar").val();
>>>>>>> ebd87bafb0dba71a53cbc986e5f3553b36f1ae52
}
