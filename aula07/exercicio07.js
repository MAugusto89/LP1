/* Encadeando Promises: Crie duas funções, step1 e step2, que retornam promises. A
função step1 deve ser resolvida com o valor 10 após 1 segundo. A função step2 deve receber um
número, multiplicá-lo por 2 e resolvê-lo após 1 segundo. Use o encadeamento de promises para
executar essas funções em sequência e imprimir o resultado final.*/

function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
function step2(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number * 2);
        }, 1000);
    });
}
step1()
    .then((result1) => {
        console.log('Resultado 1:', result1);
        return step2(result1);
    })
    .then((result2) => {
        console.log('Resultado 2:', result2);
    });