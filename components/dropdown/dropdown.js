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
function plus(id){
  let count=document.getElementsByClassName('count');
  count[id].textContent=Number(count[id].textContent)+1;
  guests();
  if(Number(count[id].textContent)>0){
    let minus=document.getElementsByClassName('minus');
    minus[id].classList.remove('zero')
  }
  else{
    minus[id].classList.add('zero')
  }
}
function minus(id){
  let count=document.getElementsByClassName('count');
  if(Number(count[id].textContent)>0){
    count[id].textContent=Number(count[id].textContent)-1;
    guests();
  }
  if(Number(count[id].textContent)==0){
    let minus=document.getElementsByClassName('minus');
    minus[id].classList.add('zero')
  }

}
function guests(){
  document.getElementsByClassName('clear')[0].classList.remove('inviz');
  let guests=document.getElementsByClassName('guests');
  let count=document.getElementsByClassName('count');
  let num=0;
  for (let i = 0; i < 3; i++){
    num=num+Number(count[i].textContent);
  }
  if(num>1) guests[0].innerHTML=num+" гостя";
  else if(num<1) guests[0].innerHTML=num+" гостей";
  else guests[0].innerHTML=num+" гость";
}

function clс(){
  let count=document.getElementsByClassName('count');
  for (let i = 0; i < 3; i++){
    count[i].textContent=0;
  }
  guests();
  document.getElementsByClassName('clear')[0].classList.add('inviz');
}

window.onclick = function(event) {
  if (event.target.matches('.ok')) {
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
