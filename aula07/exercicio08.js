/*Promises em sequência
Crie uma função que execute várias promises em sequência, ou seja, a próxima promise só será executada
quando a promise anterior for resolvida. Por exemplo, você pode criar três funções que retornem promises e
executá-las em sequência.*/

function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve();
        }, 1000);
    });
}
function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 completed");
            resolve();
        }, 1000);
    });
}
function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 3 completed");
            resolve();
        }, 1000);
    });
}
task1()
    .then(() => task2())
    .then(() => task3())
    .then(() => console.log("All tasks completed"));