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
    let btnEdit = document.createElement('button');
    let btnX = document.createElement('button');
    let check = document.createElement('input');
    check.type = 'checkbox';
    check.id = 'checkbox';
    divi.id = 'bg';
    btnEdit.id = 'edit';
    btnX.innerHTML = 'X';
    divAff.appendChild(divi);
    newP.innerHTML = inputTDL.value;
    divi.appendChild(check);
    divi.appendChild(newP);
    divi.appendChild(btnX);
    btnEdit.innerHTML = "edit";
    divi.appendChild(btnEdit);
    inputTDL.value = "";
    
    btnX.addEventListener('click', ()=> {
        divi.remove();
    })
    
    btnEdit.addEventListener('click', ()=> {
        let inputEdit = document.createElement('input');
        divi.appendChild(inputEdit);
        let btnAjout = document.createElement('button');
        btnAjout.innerHTML = "Ok";
        divi.appendChild(btnAjout);

        btnAjout.addEventListener('click', ()=> {
            newP.innerHTML = inputEdit.value;
            btnAjout.remove();
            inputEdit.remove();
        })
    })
}

document.getElementById('inputTDL').onkeypress = function(event){
    if (event.keyCode == 13){
        add();
    }
}

btnAjouter.addEventListener('click', add);

document.getElementById('checkbox').onclick = ()=> {
    document.getElementById('bg').classList.add('valide');
}