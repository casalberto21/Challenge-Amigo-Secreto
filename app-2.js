//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []
let sorteados = []

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo"); 
    let nome = inputAmigo.value.trim(); 

    //Validando a função para que não haja nomes vazios, nomes repetidos ou números.

    if (amigos.includes(nome)){
        alert("Este participante já foi escolhido! Coloque outro nome para continuar.");
        return;
    }
    
    if (nome === "" || !isNaN(nome)) { 
        alert("Favor inserir um nome válido ou que não tenha sido usado.");
        return;
    }
}
