/*Tratamento de erros em promises
Crie uma função que retorne uma promise, simulando uma operação que pode falhar. Utilize o método catch
para lidar com possíveis erros.*/

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Data fetched successfully");
            } else {
                reject("Error fetching data");
            }
        }, 1000);
    });
}
fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));