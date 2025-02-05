
let amigos = [];
let listContainer = document.getElementById('listaAmigos');

function addFriend(txt){
    if(amigos.includes(txt)){
        return alert('Duplicado')
    }
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
        listContainer.innerHTML = '';
    for(let i = 0; i < amigos.length; i++){
        listContainer.innerHTML += `<li>${amigos[i]}</li>`
    }
}
function createRamdom(lenght){
    return Math.floor(Math.random() * lenght)

}
function sortearAmigo(){
        if(amigos.length < 1){
            return alert('ingresa el nombre de tus amigos')
        }
        listContainer.innerHTML = '';
        let random = createRamdom(amigos.length)
        let resultado = document.getElementById('resultado')
        resultado.innerText = `El amigo secreto Sorteado es: ${amigos[random]}`
        amigos = []
}