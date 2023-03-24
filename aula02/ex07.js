const e = require("prompt-sync")();
class BankAccount {
    constructor(accountNumber, balance, user, balance2, deposit, withdraw) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.user = user;
        this.balance2 = balance2
        this.deposit = deposit;
        this.withdraw = withdraw;
    }
    greet() {
        return `O número da conta é ${this.accountNumber}, valor da conta é ${this.balance}, e você escolheu a opção ${user} e o balanço ficou ${this.balance2}`
    }
}

const accountNumber = Number(e('Digite número da conta: '))
const balance = Number(e('Saldo atual R$'))
console.log('----------BEM VINDO AO MENU DE OPÇÕES----------');
while (user != 4){
    console.log('Digite 1 para depósito / 2 para saque / 3 para ver o saldo / 4 para sair do sistema');
    var user = Number(e('R='))
    var calc = 0, balance2 = 0
    if (user == 1) {
        const depositar = Number(e('Valor depósito R$'))
        calc = balance + depositar
        console.log('Seu saldo atual R$'+calc);
        balance2 = calc
    } else if (user == 2) {
        const saque = Number(e('Valor saque R$'))
        calc = balance - saque
        console.log('Seu saldo atual R$'+calc);
        balance2 = calc
    } else if (user == 3) {
        console.log('Seu saldo atual R$'+balance);
    } else if (user == 4) {
        break;
    }
} 
const balanceAccount = new BankAccount(accountNumber, balance, user, balance2)
console.log(balanceAccount.greet());

