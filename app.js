
let amigos = [];

function addFriend(txt){
    amigos.push(txt);
};

function agregarAmigo(txt){
    let inputValue = document.getElementById(txt).value;
        if(inputValue == ''){
           return  alert('Por favor, inserte un nombre.');
        }
        addFriend(inputValue); 
        document.getElementById(txt).value = "";
        showFriends();
        
}
function showFriends(){
    let listContainer = document.getElementById('listaAmigos')
        listContainer.innerHTML = '';
    for(let i = 0; i < amigos.length; i++){
        listContainer.innerHTML += `<li>${amigos[i]}</li>`
    }
}
