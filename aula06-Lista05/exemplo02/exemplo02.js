class Time {
    constructor(nome, cidade, tecnico, jogadores) {
        this.nome = nome;
        this.cidade = cidade;
        this.tecnico = tecnico;
        this.jogadores = jogadores;
    }

    getNome() {
        return this.nome;
    }
    getCidade() {
        return this.cidade;
    }
    getTecnico() {
        return this.tecnico;
    }
    getJogadores() {
        return this.jogadores;
    }

    setTecnico(jogadores) {
        this.tecnico = this.tecnico;
    }
    setJogadores(jogadores) {
        this.jogadores = jogadores;
    }
}

class Jogador {
    constructor(nome, idade, posicao, time) {
        this.nome = nome;
        this.idade = idade;
        this.posicao = posicao;
        this.time = time;
    }

    getNome() {
        return this.nome;
    }
    getIdade() {
        return this.idade;
    }
    getPosicao() {
        return this.posicao;
    }
    getTime() {
        return this.time;
    }

    setPosicao(posicao) {
        this.posicao = posicao;
    }
    setTime(time) {
        this.time = time;
    }
}

let time = new Time("Barcelona", "Espanha", "Ernesto Valverde", []);
let jogador1 = new Jogador("Messi", 32, "Atacante", time);
let jogador2 = new Jogador("Suarez", 32, "Atacante", time);
let jogador3 = new Jogador("Neymar", 27, "Atacante", time);
let jogador4 = new Jogador("Pique", 32, "Zagueiro", time);
let jogador5 = new Jogador("Busquets", 30, "Volante", time);
let jogador6 = new Jogador("Rakitic", 31, "Volante", time);
let jogador7 = new Jogador("Alba", 29, "Lateral", time);
let jogador8 = new Jogador("Sergio", 29, "Lateral", time);
let jogador9 = new Jogador("Ter Stegen", 27, "Goleiro", time);
let jogador10 = new Jogador("Coutinho", 27, "Meia", time);


time.setJogadores([jogador1, jogador2, jogador3, jogador4, jogador5, jogador6, jogador7, jogador8, jogador9, jogador10]);