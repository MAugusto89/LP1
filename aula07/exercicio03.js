const promise1 = Promise.resolve('Promise 1 resolvida');
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolvida');
    }, 1000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolvida');
    }, 2000);
});
Promise.all([promise1, promise2, promise3])
    .then((results) => console.log(results))
    .catch((error) => console.error(error));
