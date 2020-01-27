let input = document.getElementById('inpt')

document.getElementById('inpt').onkeypress = function(event){
    if (event.keyCode == 13){
        entree();
    }
}

let entree = ()=> {
    let span = document.getElementById('tex');
    span.innerHTML = inpt.value;
    inpt. value = "";
}