class estacionamento {
    constructor(nome, capacidade, carros) {
        this.nome = nome;
        this.capacidade = capacidade;
        this.carros = carros;
    }
    addCar(carro) {
        var i = this.carros.length
        if (i < capacidade) {
            this.carros.push(carro);
            console.log(`Veículo adicionado!`);
        } else (
            console.log(`Estacionamento lotado!`)
        )

        var timeEntrada = carro.horaEntrada
        var timeSaida = carro.horaSaida
        var calc = ((timeEntrada - timeSaida)*-1)
        console.log(`O veículo ficou ${calc.toFixed(2)}H no local!`)
    }
    removeCar(carro) {
        var index = this.carros.indexOf(carro)
        if (index > -1) {
            this.carros.splice(index, 1);
        }
    }
    

}
class carro {
    constructor(placa, modelo, marca, cor, horaEntrada, horaSaida) {
        this.placa = placa;
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.horaEntrada = horaEntrada;
        this.horaSaida = horaSaida;
    }
}

const e = require("prompt-sync")();
console.log('----------BEM VINDO AO SISTEMA DE ESTACIONAMENTO----------');
var nome = e(String('Nome do estacionamento:'))
console.log("Quanto veículos o estacionamento suporta ?");
var capacidade = e(Number())

const newEstacionamento = new estacionamento(nome, capacidade, []);

do {
    console.log("Menu");
    console.log("1/Adicionar Veículo - 2/Remover Veículos - 3/Ver Veículos - 4/Encerrar");
    var user = e(Number())
    if (user == 1) {
        var placa = e(String("Número da Placa:"))
        var modelo = e(String("Modelo:"))
        var marca = e(String("Marca:"))
        var cor = e(String("Cor:"))
        console.log("Hora de Entrada //Use '.' para diferenciar os minutos")
        var horaEntrada = e(Number())
        console.log("Hora de Saida //Use '.' para diferenciar os minutos")
        var horaSaida = e(Number())
        var newVeiculo = new carro(placa, modelo, marca, cor, horaEntrada, horaSaida)
        newEstacionamento.addCar(newVeiculo);
    } else if (user == 2) {
        let placa = e(String('Placa:'))
        newEstacionamento.removeCar(
            newEstacionamento.carros.find((carro) => (carro.placa = placa))
        )
    } else if (user == 3) {
        console.log(newEstacionamento.carros);
    }
} while (user != 4);

console.log(newEstacionamento);