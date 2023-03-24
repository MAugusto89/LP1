const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve('Operação bem-sucedida');
    } else {
        reject('Operação falhou');
    }
});
myPromise
    .then((result) => console.log(result)) // Operação bem-sucedida
    .catch((error) => console.error(error));
