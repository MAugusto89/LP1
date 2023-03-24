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
        this.passageiro.unshift(passageiros);
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
        const userTp = e(Number('1/Adicionar - 2/Remover - 3/Sair'))
        if (userTp == 1) {
            var nome, documento, assento;
            nome = e(String('Nome: '))
            documento = e(String('Documento (RG/CPF): '))
            assento = e(String('Assento: '))
            let newPassageiro = new passageiros(nome, documento, assento);
            newAviao.addComissario(newPassageiro)
        }
    } else if (user == 2) {
        const userCom = e(Number('1/Adicionar - 2/Remover - 3/Sair'))
        if (userCom == 1) {
            var nome, documento, cargo, funcao;
            nome = e(String('Nome: '))
            documento = e(String('Documento (RG/CPF): '))
            cargo = e(String('Cargo: '))
            funcao = e(String('Função: '))
            let personAdd = new comissarios(nome, documento, cargo, funcao);
            newAviao.addComissario(personAdd)
        }
        if (userCom == 2) {
            var remove;
            console.log("Digite o documento do funcionario: ");
            remove = e(Number())
            for (let i = 0; i < comissarios.length; i++) {
                if (comissarios[documento] === remove) {
                    comissarios.splice(documento, documento);
                    console.log("Funcionário removido com sucesso!");
                }else{
                    console.log("Funcionário não encontrado!");
                }
            }
        }
        /*if (userFun == 2) {
             personRemove = e(String("Digite o número do funcionário para remover: "))
             const remover = funcionario.splice(personRemove, personRemove)
         }*/
    }
} while ( user != 3);

console.log(newAviao)