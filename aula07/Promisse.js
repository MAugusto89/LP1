//criação de promessa
const myPromise = new Promise((resolve, reject) => {
    const nome = 'Marcelo'

    if (nome === 'Marcelo') {
        resolve('User found')
    } else {
        reject('User not found')
    }
})

myPromise.then((data) => {
    console.log(data);
})


//encadeamento de thens

const myPromise2 = new Promise((resolve, reject) => {
    const nome = 'Marcelo'

    if (nome === 'Marcelo') {
        resolve('User found')
    } else {
        reject('User not found')
    }
})

myPromise2
    .then((data) => {
        return data.toLowerCase()
    })
    .then((stringModificada) => {
        console.log(stringModificada);
    })

//retorno de catch

const myPromise3 = new Promise((resolve, reject) => {
    const nome = 'João'

    if (nome === 'Marcelo') {
        resolve('User found')
    } else {
        reject('User not found')
    }
})

myPromise3
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("aconteceu o erro ", err);
    })

//resolver varias promessas
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 ok!')
    }, 2000)
})
const p2 = new Promise((resolve, reject) => {
    resolve('P2 ok!')
})
const p3 = new Promise((resolve, reject) => {
    resolve('P3 ok!')
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data);
})


//varias promessa com race
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P4 ok!')
    }, 2000)
})
const p5 = new Promise((resolve, reject) => {
    resolve('P5 ok!')
})
const p6 = new Promise((resolve, reject) => {
    resolve('P6 ok!')
})

const resolveRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data);
})


//fetch request na api do github
//fetch api

const username = 'MAugusto89'

fetch(`https://api.github.com/users/${username}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
}).then((response) => {
    console.log(typeof response);
    console.log(response);
    return response.json()
}).then((data) => {
    console.log(`${data.name}`);
}).catch((err) => {
    console.log(`Houve algum erro: ${err}`);
})