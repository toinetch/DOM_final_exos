let btnOeuf = document.getElementById('btnOeuf');
let btnEnlever = document.getElementById('btnEnlever');
let btnReset = document.getElementById('btnReset');
let place = document.getElementById('images')

btnOeuf.onclick = function() {
    let img = document.createElement('img');
    img.src = 'https://images-na.ssl-images-amazon.com/images/I/41U55QnqjWL.jpg';
    place.appendChild(img);
    img.style.width = '50px';
    img.style.height = '50px';
    img.style.margin = '5px';
}

btnEnlever.onclick = function() {
    place.removeChild(place.lastChild);
}

btnReset.onclick = function () {
    while(this.lastChild != 0){
        place.removeChild(place.lastChild);
    }
    // place.innerHTML = ''; //////// AUTRE FACON
}