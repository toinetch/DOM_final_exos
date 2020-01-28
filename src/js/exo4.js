let carreGauche = document.getElementById('div441');
let carreDroit = document.getElementById('div442');
let bouton = document.getElementById('btnPlace');
let cpt = document.getElementById('nbclick');
let reset = document.getElementById('reset');
let count = 0;

bouton.onclick = function() {
    if(carreGauche.style.display == "none"){
        carreGauche.style.display = "block";
        carreDroit.style.display = "none";
    }
    else{
        carreGauche.style.display = "none";
        carreDroit.style.display = "block";
    }
    nbclick.innerHTML = ++count;
}

reset.onclick = function() {
    nbclick.innerHTML = 0;
    count = 0;
    carreDroit.style.display = "none";
    carreGauche.style.display = "block";
}