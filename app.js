
let amigos = [];

function addFriend(txt){
    amigos.push(txt);
};
function validateFriend(input){
    if( input == ''){
        return alert('Por favor, inserte un nombre.');
    }
        addFriend(input);
         return input = '';
};
function agregarAmigo(txt){
    let inputValue= document.getElementById(txt);
        validateFriend(inputValue);
}

