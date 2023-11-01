//Exemplo 2: Ausencia de um parâmentro

torrar("pão de forma", 10.90,) // Neste caso não foi informado o cliente. O algoritmo irá retornar um valor padrão.

function torrar(pao,valor, nome = "Cliente"){
    console.log("torrada feita com " + pao)
    console.log("ela é um pedido de " + nome)
    console.log("O valor do total é R$ " + valor)
}