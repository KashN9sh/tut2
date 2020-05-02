window.onload = function() {
  let dropdowns = document.getElementsByClassName("dropbtn");
  var i;
  for ( i = 0; i < dropdowns.length; i++) {
    dropdowns[i].id=i;
  }
}
function drop(id) {
  let content = document.getElementsByClassName("dropdown-content")[id];
  content.classList.toggle('show');
}
