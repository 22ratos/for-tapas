const smile = document.getElementById('smile');
const chorar = document.getElementById('cry');
const cara = document.getElementById('norm');

function sorria() {
    cara.src= 'Picsart_23-06-12_10-11-10-021.png'
}

function chore(){
    cara.src='Picsart_23-06-12_10-13-40-635.png'
}

function apanhe(){
    cara.src='Picsart_23-06-12_10-11-48-722.png'
}

function padrao(){
    cara.src='Picsart_23-06-12_10-10-38-063.png'
}

function vergonhe(){
    cara.src='Picsart_23-06-12_11-33-51-503.png'
}
cry.addEventListener('click',chore);
smile.addEventListener ('click',sorria);


cara.addEventListener ('mouseover',vergonhe);

cara.addEventListener ('mouseleave',padrao);

cara.addEventListener('dblclick',apanhe);




