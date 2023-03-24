function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({ data: 'Dados da API', url: url });
            } else {
                reject('Erro ao buscar dados');
            }
        }, 2000);
    });
}
fetchData('https://api.example.com/data')
    .then((response) => console.log(response))
    .catch((error) => console.error(error));