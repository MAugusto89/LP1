/*Crie uma função authenticateUser que recebe um nome de usuário e senha e retorna uma promise. Se
a autenticação for bem-sucedida, a promise deve ser resolvida com uma mensagem de sucesso. Caso
contrário, deve ser rejeitada com uma mensagem de erro.*/


var e = require('prompt-sync')()
const user = e(String('Username:'))
console.log('Senha');
const password = e(Number())

function authenticateUser(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const validCredentials = username === 'user' && password === '1234';
            if (validCredentials) {
                resolve('Autenticação bem-sucedida');
            } else {
                reject('Nome de usuário ou senha incorretos');
            }
        }, 1000);
    });
}
authenticateUser(user, password)
    .then((message) => console.log(message))
    .catch((error) => console.error(error));