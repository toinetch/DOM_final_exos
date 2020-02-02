//NIVEAU 1
let egal1 = document.getElementById('egal1');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let result = document.getElementById('resultat');
let formulaire = document.getElementById('formu');

egal1.onclick = ()=> {
    switch(formulaire.value){
        case '+':
            result.value = parseInt(input1.value) + parseInt(input2.value);
            break;
        case '-':
            result.value = parseInt(input1.value) - parseInt(input2.value);
            break;
        case '*':
            result.value = parseInt(input1.value) * parseInt(input2.value);
            break;
        case '/':
            result.value = parseInt(input1.value) / parseInt(input2.value);
            break;
    }
}

// NIVEAU 2
let total = document.getElementById('inptotal');

let zero = document.getElementById('0').onclick = ()=> {
    total.value = total.value + 0;
}

let un = document.getElementById('1').onclick = ()=> {
    total.value = total.value + 1;
}

let deux = document.getElementById('2').onclick = ()=> {
    total.value = total.value + 2;
}

let trois = document.getElementById('3').onclick = ()=> {
    total.value = total.value + 3;
}

let quatre = document.getElementById('4').onclick = ()=> {
    total.value = total.value + 4;
}

let cinq = document.getElementById('5').onclick = ()=> {
    total.value = total.value + 5;
}

let six = document.getElementById('6').onclick = ()=> {
    total.value = total.value + 6;
}

let sept = document.getElementById('7').onclick = ()=> {
    total.value = total.value + 7;
}

let huit = document.getElementById('8').onclick = ()=> {
    total.value = total.value + 8;
}

let neuf = document.getElementById('9').onclick = ()=> {
    total.value = total.value + 9;
}

let reset = document.getElementById('C').onclick = ()=> {
    total.value = "";
}

let plus = document.getElementById('+').onclick = ()=> {
    total.value = total.value + '+';
}

let moins = document.getElementById('-').onclick = ()=> {
    total.value = total.value + '-';
}

let fois = document.getElementById('*').onclick = ()=> {
    total.value = total.value + '*';
}

let divise = document.getElementById('/').onclick = ()=> {
    total.value = total.value + '/';
}

let egal = document.getElementById('=').onclick = ()=> {
    let a = total.value;
    total.value = eval(a);
}

document.getElementById('=').onkeypress = function(event){
    if (event.keyCode == 13){
        enter();
    }
}

let enter = ()=> {
    let a = total.value;
    total.value = eval(a);
}