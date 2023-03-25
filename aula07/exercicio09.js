/*Tratamento de erros em promises
Crie uma função que retorne uma promise, simulando uma operação que pode falhar. Utilize o método catch
para lidar com possíveis erros.*/

var e = require('prompt-sync')()

console.log('Digite um número:');
const user = e(Number())

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random(user) > 0.5;
            if (success != 0) {
                resolve("Data fetched successfully");
            } else {5
                reject("Error fetching data");
            }
        }, 2000);
    });
}
fetchData().then((data) => console.log(data)).catch((error) => console.error(error));