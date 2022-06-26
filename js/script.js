const numerosApostados = [];
const btnApostar = document.getElementById("btnApostar");
btnApostar.disabled = true;
let valorAposta =  0;
const resultado = [];

sorteaNumeros();

function sorteaNumeros() {
    for(i = 0; i < 6; i++) {
        let numeroSorteado = Math.round(Math.random() * 59 + 1);

        while(resultado.includes(numeroSorteado)){
            let numeroSorteado = Math.round(Math.random() * 59 + 1);
        }
        resultado.push(numeroSorteado);
    }
}

function selecionarNumeros (numero) {

    if(numerosApostados.length >= 0 && numerosApostados.length < 15) {
        // adiciona o numero na lista
        numerosApostados.push(numero);

        // desabilita o numero selecionado
        desabilitarNumeroEscolhido(numero);

        // habilita o botão de apostar
        if(numerosApostados.length > 5){
            btnApostar.disabled = false;

            //mostrar valor da aposta
            valorDaAposta();
        }

        //qtd de numeros selecioinados para aposta
        const qtdApostas = document.getElementById("qtdNumeros");
        qtdApostas.innerHTML = "<p>Qtd Números</p><p class='valor'> " + numerosApostados.length + "</p>";
    }
}

function desabilitarNumeroEscolhido(numero) {

    document.getElementById("num_" + numero).disabled = true;
    document.getElementById("num_" + numero).style.background = "#009e4c";
    document.getElementById("num_" + numero).style.color = "#fff";
}

function valorDaAposta () {
    switch(numerosApostados.length) {
        case 6:
            valorAposta = "R$ 4,50"
        break;

        case 7:
            valorAposta = "R$ 31,50"
        break;

        case 8:
            valorAposta = "R$ 126,00"
        break;
        
        case 9:
            valorAposta = "R$ 378,00"
        break;

        case 10:
            valorAposta = "R$ 945,00"
        break;

        case 11:
            valorAposta = "R$ 2.079,00"
        break;

        case 12:
            valorAposta = "R$ 4.158,00"
        break;

        case 13:
            valorAposta = "R$ 6.006,00"
        break;

        case 14:
            valorAposta = "R$ 10.510,50"
        break;

        case 15:
            valorAposta = "R$ 17.517,50"
        break;

        default:
            valorAposta = "R$ 0,00"
            break;

    } 

    const divValorAposta = document.getElementById("valor");
    divValorAposta.innerHTML = "<p>valor da Aposta</p><p class='valor'>" + valorAposta + "</p>";

}

