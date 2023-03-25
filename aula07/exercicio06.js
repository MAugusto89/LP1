/*Simulando um sistema de carregamento de imagens: Crie uma função loadImage
que recebe um URL e retorna uma promise. A promise deve ser resolvida com uma mensagem de
sucesso se a imagem for carregada corretamente e rejeitada com uma mensagem de erro se houver
um problema.*/

function loadImage(url) {
return new Promise((resolve, reject) => {
const img = new Image();
img.onload = () => resolve('Imagem carregada com sucesso');
img.onerror = () => reject('Erro ao carregar a imagem');
img.src = url;
});
}
loadImage('https://example.com/image.jpg')
.then((message) => console.log(message))
.catch((error) => console.error(error));


/*var url = document.getElementsByTagName('img');

function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image(300, 300);
        img.onload = () => resolve('Imagem carregada com sucesso');
        img.onerror = () => reject('Erro ao carregar a imagem');
        img.src = url;
    });
}
loadImage('../wheat-7852286_960_720.jpg')
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
*/