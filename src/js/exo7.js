let btnAjouter = document.getElementById('add');
let inputTDL = document.getElementById('inputTDL');
let btnTous = document.getElementById('TDL1');
let btnComplet = document.getElementById('TDL2');
let btnAfaire = document.getElementById('TDL3');
let divAff = document.getElementById('divAffichage');
let body = document.getElementsByName('body');

let add = ()=> {
    let divi = document.createElement('div');
    let newP = document.createElement('span');
    let btnX = document.createElement('button');
    let check = document.createElement('input')
    check.type = 'checkbox';
    check.id = 'checkbox';
    divi.id = 'bg';
    btnX.innerHTML = 'X';
    divAff.appendChild(divi);
    newP.innerHTML = inputTDL.value;
    divi.appendChild(check);
    divi.appendChild(newP);
    divi.appendChild(btnX);
    inputTDL.value = "";
    btnX.addEventListener('click', ()=> {
        divi.remove();
        }
    )
}

document.getElementById('inputTDL').onkeypress = function(event){
    if (event.keyCode == 13){
        add();
    }
}

btnAjouter.addEventListener('click', add);

