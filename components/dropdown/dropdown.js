window.onload = function() {
  let dropdowns = document.getElementsByClassName("dropbtn");
  let drop_icon = document.getElementsByClassName("drop_icon");
  for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].id=i;
    drop_icon[i].id=i;
  }
}
function drop(id) {
  let dropdown = document.getElementsByClassName("dropdown")[id];
  let content = document.getElementsByClassName("dropdown-content")[id];
  if(dropdown.classList.contains('date')){
    content.classList.toggle('show');
  }
  else{
    content.classList.toggle('show');
    dropdown.classList.toggle('open');
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('.drop_icon')) {
    let content = document.getElementsByClassName("dropdown-content");
    let dropdown = document.getElementsByClassName("dropdown");
    for (let i = 0; i < content.length; i++) {
      if (content[i].classList.contains('show')) {
        content[i].classList.remove('show');
        dropdown[i].classList.remove('open');
      }
    }
  }
}
