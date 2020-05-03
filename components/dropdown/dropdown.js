window.onload = function() {
  let dropdowns = document.getElementsByClassName("dropbtn");
  let drop_icon = document.getElementsByClassName("drop_icon");
  let id=0;
  for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].id=id;
    drop_icon[i].id=id;
    if (dropdowns[i].classList.contains('date')){
      dropdowns[i+1].id=id;
      drop_icon[i+1].id=id;
      i++;
      id++;
    }
    id++;
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
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains('show')) {
        dropdowns[i].classList.remove('show');
      }
    }
  }
}
