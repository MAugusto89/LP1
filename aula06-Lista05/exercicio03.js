const e = require("prompt-sync")();

class aviao {
    constructor(modelo, numeroAssentos, numeroVoo, destino, capitao, copiloto, comissario, passageiro) {
        this.modelo = modelo;
        this.numeroAssentos = numeroAssentos;
        this.numeroVoo = numeroVoo;
        this.destino = destino;
        this.capitao = capitao;
        this.copiloto = copiloto;
        this.comissario = comissario;
        this.passageiro = passageiro;
    }
    addComissario(comissarios) {
        this.comissario.unshift(comissarios);
    }
    addPassageiro(passageiros){
        this.passageiro.push(passageiros);
    }
    removeFuncionario(comissarios) {
        var index = this.comissario.indexOf(comissarios)
        if (index > -1) {
            this.comissario.splice(index, 1);
        }
    }
    removePassageiro(passageiros) {
        var index = this.passageiro.indexOf(passageiros)
        if (index > -1) {
            this.passageiro.splice(index, 1);
        }
    }
    
}
class passageiros {
    constructor(nome, documento, assento) {
        this.nome = nome;
        this.documento = documento;
        this.assento = assento;
    }
}
class comissarios {
    constructor(nome, documento, cargo, funcao) {
        this.nome = nome;
        this.documento = documento;
        this.cargo = cargo;
        this.funcao = funcao;
    }
}
console.log('----------BEM VINDO AO SISTEMA DE CADASTRO DE AVIÃO----------');
modelo = e(String("Modelo:"))
numeroAssentos = e(String("Assentos:"))
numeroVoo = e(String("Vôo:"))
destino = e(String("Destino:"))
capitao = e(String("Capitão:"))
copiloto = e(String("Copiloto:"))
const newAviao = new aviao(modelo, numeroAssentos, numeroVoo, destino, capitao, copiloto, [], [])
let user = 0
do {
    console.log('ESCOLHA UMA DAS OPÇÕES');
    console.log('1/Passageiros - 2/Fucionários - 3/Encerrar');
    user = e(Number())
    if (user == 1) {
        console.log('1/Adicionar - 2/Remover - 3/Ver')
        const userPass = e(Number())
        if (userPass == 1) {
            var nome, documento, assento;
            nome = e(String('Nome: '))
            documento = e(String('Documento (RG/CPF): '))
            assento = e(String('Assento: '))
            let newPassageiro = new passageiros(nome, documento, assento);
            newAviao.addPassageiro(newPassageiro)
        } else if (userPass == 2) {
            var removePas;
            console.log("Digite o documento do passageiro: ");
            removePas = e(Number())            
            newAviao.removePassageiro(
                newAviao.passageiro.find((passageiros) => (passageiros.documento = documento))
            )
        }else if(userPass == 3){
            console.log(newAviao.passageiro);
        }
    } else if (user == 2) {
        console.log('1/Adicionar - 2/Remover - 3/Ver');
        const userCom = e(Number())
        if (userCom == 1) {
            var nome, documento, cargo, funcao;
            nome = e(String('Nome: '))
            documento = e(String('Documento (RG/CPF): '))
            cargo = e(String('Cargo: '))
            funcao = e(String('Função: '))
            let personAdd = new comissarios(nome, documento, cargo, funcao);
            newAviao.addComissario(personAdd)
        } else if (userCom == 2) {
            var removeFun;
            console.log("Digite o documento do funcionário: ");
            removeFun = e(Number())            
            newAviao.removeFuncionario(
                newAviao.comissario.find((comissarios) => (comissarios.documento = documento))
            )
        } else if(userCom == 3){
            console.log(newAviao.comissario);
        }
    }
} while ( user != 3);

console.log(newAviao)