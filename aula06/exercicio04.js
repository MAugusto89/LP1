class estacionamento{
    constructor(nome, capacidade, carros, remove){
        this.nome = nome;
        this.capacidade = capacidade;
        this.carros = carros;
        this.remove = remove;
    }
    addCar(carro) {
        this.carros.push(carro);
    }
    removeCar(carro){
        var index = this.carros.indexOf(carro)
        if (index > -1) {
            this.carros.splice(index, 1);
        }

    }
}
class carro{
    constructor(cod, placa, modelo, marca, cor, horaEntrada, horaSaida){
        this.cod = cod;
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
const newEstacionamento = new estacionamento(nome, capacidade, [], []);

do {
    console.log("Menu");
    console.log("1/Adicionar Veículo-2/Remover Veículos-3/Ver Veículos-4/Encerrar");
    var user = e(Number())
    if (user == 1) {
        console.log("Código Operação:");
        var cod = e(Number())
        var placa = e(String("Número da Placa:"))
        var modelo = e(String("Modelo:"))
        var marca = e(String("Marca:"))
        var cor = e(String("Cor:"))
        console.log("Hora de Entrada:")
        var horaEntrada = e(Number())
        console.log("Hora de Saida:")
        var horaSaida = e(Number())
        var newVeiculo = new carro(cod, placa, modelo, marca, cor, horaEntrada, horaSaida)
        newEstacionamento.addCar(newVeiculo);
    }else if (user == 2) {
        let placa = e(String('Placa:'))
        newEstacionamento.removeCar(
            newEstacionamento.carros.find((carro) => (carro.placa = placa))
        )
    }else if (user == 3) {
        console.log(newEstacionamento);
    }    
} while (user!= 4);

console.log(newEstacionamento);