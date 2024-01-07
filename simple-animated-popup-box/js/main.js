
let toggle = document.querySelector('.toggle');
let container = document.querySelector('.container');
toggle.onclick = function(){
  container.classList.toggle('active');
}