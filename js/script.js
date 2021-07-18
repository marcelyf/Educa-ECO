function lista(){
  var lista = document.getElementById("lista");

  if(lista.style.display != "flex"){
  lista.style.display = "flex";
  }else {
  lista.style.display = "none";
  }
}
  
const btnMobile = document.getElementById('btn');
function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function func() {
  var c = document.getElementById("click");

  if (c.checked === true){
    document.getElementById('container').style.display = "flex";
  }else{
    document.getElementById('container').style.display = "none";
  }
}

  function fechar(){
    document.getElementById('container').style.display = "none";
  }
