function lidarComClique(callback){
    callback();
}

const botao = document.getElementById("meuBotao");
botao.addEventListener("click", function(){
    lidarComClique(function(){
        console.log("Botão Clicado!");
    })
})