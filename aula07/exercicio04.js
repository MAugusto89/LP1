const promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise A resolvida');
    }, 1000);
});
const promiseB = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise B resolvida');
    }, 500);
});
Promise.race([promiseA, promiseB])
    .then((result) => console.log(result)) // Promise B resolvida
    .catch((error) => console.error(error));