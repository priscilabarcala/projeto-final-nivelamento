/* 
6.1) Variáveis e Constantes:
O conceito de variável é um espaço na memória em que reservamos e armazena um valor.
 Um exemplo para o mundo externo é uma gaveta. Ex: var a = nome;

 O conceito de constante é um espaço na memória em que é armazenado um valor que não muda com o tempo.
 Um exemplo é o IP de um computador. Ex: const pularLinha = '<br>'

 6.2)Comandos de decisão:
 São as chamadas CONDICIONAIS (If else, switch).
 if é uma estrutura condicional. Onde se deseja executar diferentes ações tomando diferentes posições.
 Exemplo: Ele fica executando a ação enquanto a condição permanecer verdadeira.
 A estrutura if else acontece quando você tem uma condição verdadeira e uma condição falsa. 
 Caso a condição verdadeira não seja satisfatória, cairá no else.
 Ou seja, se a condição for falsa, será executado o else.
 Switch Usada quando as condições são diferentes. Separada em casos.
 Cada caso é analisado, quando existe a correspondência em um, ele é executado. 
 A sintaxe usada é : switch(){} com os cases dentro das chaves. 
 Também considerado uma estrutura condicional, assim como o if else.


 6.3)Loops
 Um loop é quando o código fica executando diversas vezes.
 Exemplos são o for e while.
 Quanto ao for, em português seria para. Ou seja, para aquela condição, o loop fica executando o código.
 Existem três tipos de for: o for, o for/in e o for/of. 

 var listaNomes = ['Fabia','Carla', 'Andreia'];
    for(var i = 0; i < listaNomes.length; i++){
    document.write(listaNomes[i] + '<br>');
}
Quanto ao while, É uma estrutura de loop que fica executando o código desde que a condição seja verdadeira.
Importante se atentar na hora de utilizar este recurso para não causar loops infinitos. 
Traduzindo para o português, seria enquanto.
do/while: executa o loop antes de verificar se é verdade, e depois se a condição for verdadeira, continuará executando.

6.4) Funções
Funções são blocos de código que foram feitos para executar uma determinada tarefa. 
Quanto a sua sintaxe, é utilizada a palavra function (){}.
Exemplo:
function mostrarAlerta(){
     alert('Oi, Professor!');
 }
mostrarAlerta();

6.5) Escopos
Escopo significa a visibilidade das variáveis, objetos e funções.
O escopo é dividido em local e global. 
Exemplo: A local só pode ser acessada dentro da função, 
enquanto a global é quando a variável é declarada fora da função, ou seja, quando todos podem acessar ela.

6.6) Inputs e Outputs
Input é a entrada de dados. Output é saída de dados. 
Os exemplos destes são: 
alert() - output; 
console.log() - output; 
documento.write() - output; 
prompt() -input;

6.7) Array
Array é uma lista de informações. É uma matriz de valores. Simbolizado pelos colchetes [].
Exemplo: var listaNomes = ['Priscila', 'Weberson', 'Guilherme', 'Gabriela']

6.8) Objetos
Objetos são variáveis que contém muitos valores. 
Estes possuem propriedades. São representados pelas chaves {}.
var curso = {
    alunos:['Fulano', 'Ciclano'],
    mensalidade: 500.0
    turno: 'manha'
    optativas:['mat1', 'mat2']
};


6.9) camelCase, PascalCase, kibab-case, snake_case
Todos esses são padrões de escrita de código.
camelCase: Usado no javaScript e em java.
PascalCase: Usado em C#
snake_case: Usado em python
kibab-case: Usado no HTML

6.10) Diferença entre caminho absoluto e caminho relativo
O caminho absoluto tem a ver com a pasta raiz, enquanto o caminho relativo parte da basta base do projeto.

6.11) Diferença entre os operadores &&, ||, ==, !=
Todos são operadores lógicos.
&& = e - Ambas as condições tem que ser verdade
|| = ou - Pelo menos uma condição tem que ser verdade
== = igual - Ambas as condições tem que ser iguais
!= = diferente

6.12) EPER
Eper é um método organizacional citado pelo professor onde são quatro passos para sua implementação.
Utilizando a lógica de programação para a satisfação do problema.
São essas fases: o entendimento, planejamento, execução e revisão.

6.13) Pilha e Fila
Dentro do array temos a conceituação de PILHA E FILA:
PILHA : O primeiro que entra é o último que sai. Exemplo prático: uma pilha de roupa mesmo, funciona desta maneira a visualiação.
FILA: O primeiro que entra é o primeiro que sai. Exemplo prático: uma fila de banco, onde quem chega primeiro, também sera atendido primeiro.

6.14) HTML, CSS e JavaScript
HTML: OSSOS, O QUE SUSTENTA. É a base, não tem alteração por si só.
É fixa. Somente para mostrar os dados na tela.
CSS: PELE E A CARNE. EMBELEZAMENTO. Linguagem estática. 
Voltada para o layout, ou seja, beleza dos elementos na tela.
JavaScript: VIDA. Linguagem dinâmica.

