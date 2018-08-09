var button = document.querySelector('.menu__button');
var menu = document.querySelector('.menu__body');
var close = document.querySelectorAll('.close');
var overlay = document.querySelector('.menu__overlay');
var mapaEmpresa = document.querySelector('#icode-mapa');
var mostraMapa = document.querySelector('#mapa-empresa');

function showMenu() {
	button.setAttribute('hidden', '');
	menu.removeAttribute('hidden');
	overlay.removeAttribute('hidden');
  mostraMapa.setAttribute('hidden', '');
};

function hideMenu() {
	menu.setAttribute('hidden', '');
	overlay.setAttribute('hidden', '');
	button.removeAttribute('hidden');
  mostraMapa.setAttribute('hidden', '');
};

function showMap(){
  button.setAttribute('hidden', '');
	menu.setAttribute('hidden', '');
	overlay.removeAttribute('hidden');
  mostraMapa.removeAttribute('hidden');
};

button.addEventListener('click', showMenu);
for(var i = 0; i < close.length; i++){
  close[i].addEventListener('click', hideMenu);
}

overlay.addEventListener('click', hideMenu);
mapaEmpresa.addEventListener('click', showMap);