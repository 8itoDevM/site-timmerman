let loged = false;

let userType = [customer, admin];

let colors = ["vermelho","preto","branco","amarelo","prata", "cinza", "verde"];
let use = ["usado","novo"];

let cars = [
    {
        nome: "F40",
        marca: "Ferrari",
        quilometragem: 50000,//em km
        preco: 3900000,//em reais
        uso: use[0],
        cor: colors[0],
        foto: "url de alguma foto do banco de dados aqui"
    }
];

console.log(cars);