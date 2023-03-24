/*Promise.all com tratamento de erros
Crie várias promises e utilize o Promise.all para executá-las simultaneamente. Adicione tratamento de erros
para que, se alguma promise falhar, você possa identificar qual falhou e continuar executando as outras.*/

const promises = [
    Promise.resolve("Promise 1"),
    new Promise((resolve, reject) => setTimeout(() => reject("Promise 2 failed"),
        1000)),
    Promise.resolve("Promise 3"),
];
Promise.allSettled(promises)
    .then((results) => {
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Promise ${index + 1} succeeded: ${result.value}`);
            } else {
                console.error(`Promise ${index + 1} failed: ${result.reason}`);
            }
        });
    });