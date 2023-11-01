# Funções - Resumo

## O que são funções

 - Uma função é uma parte do código que agrupa um conjunto de instruções relacionadas e as coloca em um bloco com um nome. As funções são projetada para realizar uma tarefa específica ou cálculo e pode ser chamada (invocada) em várias partes de um programa, possibilitando a reutilização do mesmo conjunto de instruções sem precisar reescrevê-lo várias vezes.
    - Exemplos de funções:
      - função somar em Python: 
        - def somar(a, b):
          - resultado = a + b
          - return resultado
    -   Neste exemplo, a função somar recebeu dois parâmetros, a e b, e retorna a soma desses números. Neste caso a função somar pode ser chamda varias vezes em seu programa para somar números diferentes, permitindo a reutilização do código, economizando tempo e evitando a necessidade de repetir o código de soma.

- A reutilização do código possibilita o aumento da produtividade visto que pode-se criar funções para tarefas comuns e chamá-las sempre que necessário, evitando duplicação de código
- As funções também permitem organização e modularização do programa visto que o progrma pode ser dividido em módulos mais gerenciáveis de forma a facilitar a compreensão do código, uma vez que as partes complexas são divididas em funções mais simples.

## Definindo uma função

- Para construção de uma função deve atentar a alguns critérios e boas praticas.
    - Nome da Função:  Toda função tem um nome para identificá-la e seu nome é utilizado para chamá-la em outras partes do programa.
      - Nome de funções não podem começar com números.
       - Nomeie as funções como verbo. (Ex: Cadastrar, salvar, enviar...)
       - Uma boa pratica é criar uma função para apenas uma ação, facilitando o entendimento e a manutenção futura do código.
    - Parâmetros: As funções podem receber parâmetros ou argumentos que  permitem que a função processe dados diferentes em cada chamada.
    - Corpo da Função: No corpo da função fica conjunto de instruções que define o que a função faz
    - Valor de Retorno: Muitas funções produzem um resultado, denomindado valor de retorno. este resultado pode ser utilizado em outras partes do programa.


## Exemplos de funções

  - Funções com Parâmetros: São funções que sempre executaram a mesma ação mas com parâmetros direfentes. Exemplo: Geração de um string de conexão com banco de dados.

    |Funções|Descrição|Arquivo|
    |-------|---------|-------|
    |Exemplo 1| Neste exemplo foi criada uma função com utilização de dois parâmetros "pao" e "nome", que serão utilizados como parametros de entrada.| [Arquivo]()|
    |Exemplo 2| Neste exemplo foi criada uma função com utilização de três parâmetros "pao", "valor" e "nome", que serão utilizados como parametros de entrada, mas o valor do não foi informado sendo substituido por um valor padrão.|[Arquivo]()|
    |Exemplo 3| Neste exemplo foi criada uma função com utilização de três parâmetros "pao", "nome"  e "valor". Entretanto o parâmetro "nome" de entrada foi informado como "undefined", como método de bular a geração do erro, e sendo substituido por um valor padrão isnerido na função.|[Arquivo]()|

  - Funções com retorno: 

      -Em construção
  




