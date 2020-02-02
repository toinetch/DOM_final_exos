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
    check.onclick = function checkColor(e){
        if (check.checked == true){
            e.target.parentElement.classList.add('valide');
            e.target.parentElement.classList.remove('bg');
            e.target.parentElement.classList.add('val');
        }
        else{
            e.target.parentElement.classList.add('bg');
            e.target.parentElement.classList.remove('valide');
            e.target.parentElement.classList.remove('val');
        }
    };
    divi.classList.add('bg');
    btnEdit.id = 'edit';
    btnX.innerHTML = 'X';
    if(inputTDL.value == ""){
        alert('Veuillez entrer quelque chose avant de valider')
    }
    else{
        divAff.appendChild(divi);
        newP.innerHTML = inputTDL.value;
        divi.appendChild(check);
        divi.appendChild(newP);
        divi.appendChild(btnX);
        btnEdit.innerHTML = "edit";
        divi.appendChild(btnEdit);
        inputTDL.value = "";
    }
    

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

    btnComplet.onclick = ()=> {
        let x, i, y;
        y = document.getElementsByClassName('valide');
        x = document.getElementsByClassName('bg');
        for(i = 0; i < x.length; i++){
            x[i].style.display = 'none';
        }
        for(i = 0; i < y.length; i++){
            y[i].style.display = 'flex';
        }
    }

    btnTous.onclick = ()=> {
        let x, i, y;
        y = document.getElementsByClassName('valide');
        x = document.getElementsByClassName('bg');
        for(i = 0; i < x.length; i++){
            x[i].style.display = 'flex';
        }
        for(i = 0; i < y.length; i++){
            y[i].style.display = 'flex';
        }
    }

    btnAfaire.onclick = ()=> {
        let x, i, y;
        y = document.getElementsByClassName('valide');
        x = document.getElementsByClassName('bg');
        for(i = 0; i < x.length; i++){
            x[i].style.display = 'flex';
        }
        for(i = 0; i < y.length; i++){
            y[i].style.display = 'none';
        }
    }
}

document.getElementById('inputTDL').onkeypress = function(event){
    if (event.keyCode == 13){
        add();
    }
}

btnAjouter.addEventListener('click', add);

