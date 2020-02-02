let btnOeuf = document.getElementById('btnOeuf');
let btnEnlever = document.getElementById('btnEnlever');
let btnReset = document.getElementById('btnReset');
let compteu = document.getElementById('compteu');
let place = document.getElementById('images');
let cpt = 0;
compteu.innerHTML = 0;

btnOeuf.onclick = function() {
    let img = document.createElement('img');
    img.src = 'https://images-na.ssl-images-amazon.com/images/I/41U55QnqjWL.jpg';
    place.appendChild(img);
    img.style.width = '50px';
    img.style.height = '50px';
    img.style.margin = '5px';
    cpt = ++cpt;
    compteu.innerHTML = cpt;
}

btnEnlever.onclick = function() {
    place.removeChild(place.lastChild);
    cpt = --cpt;
    compteu.innerHTML = cpt;
}

btnReset.onclick = function () {
    while(this.lastChild != 0){
        place.removeChild(place.lastChild);
        cpt = 0;
        compteu.innerHTML = cpt;
    }
    // place.innerHTML = ''; //////// AUTRE FACON
}