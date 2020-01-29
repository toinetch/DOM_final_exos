let input = document.getElementById('inpt')

input.onkeypress = function(event){
    if (event.keyCode == 13){
        entree();
    }
}

let entree = ()=> {
    let span = document.getElementById('tex');
    span.innerHTML = inpt.value;
    inpt. value = "";
}