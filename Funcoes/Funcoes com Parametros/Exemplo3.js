// Exemplo 3: Ausencia de um parâmentro com gambiarra

torrar("pão de forma", undefined,"felipe") // Neste caso não foi informado o valor do pedido e foi utilizado o valor undefined que será substituido pelo valor padrão.

function torrar(pao,valor = 99.90, nome = "Cliente"){
    console.log("torrada feita com " + pao)
    console.log("ela é um pedido de " + nome)
    console.log("O valor do total é R$ " + valor)
}