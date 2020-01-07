/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Paulista';
console.log (championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = [ 'Corinthians', 'São Paulo', 'Santos', 'Palmeiras', 'Oeste' ];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(posicao){
     
      switch (posicao){
        case 1:
          return 'O time que está em ' + posicao + ' lugar é o ' + teams[2] + '.' ;
          break;
          
        case 2:
          return 'O time que está em ' + posicao + ' lugar é o ' + teams[0] + '.' ;
          break; 
          
        case 3:
          return 'O time que está em ' + posicao + ' lugar é o ' + teams[1] + '.' ;
          break;
          
        case 4:
          return 'O time que está em ' + posicao + ' lugar é o ' + teams[4] + '.' ;
          break;
          
        case 5:
          return 'O time que está em ' + posicao + ' lugar é o ' + teams[3] + '.' ;
          break;  
          
        default:
          return 'Não temos a informação do time que está nessa posição.';
          break; 
         
      }
  
    
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1)); //"O time que está em 1 lugar é o Santos."
console.log(showTeamPosition(2)); //"O time que está em 2 lugar é o Corinthians."
console.log(showTeamPosition(3)); //"O time que está em 3 lugar é o São Paulo."
console.log(showTeamPosition(4)); //"O time que está em 4 lugar é o Palmeiras."
console.log(showTeamPosition(6)); //"Não temos a informação do time que está nessa posição."
/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var x = 20;

while (x <= 30){
  console.log(x++);
}  

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cor){
  var convercao; 
  Switch(cor){
    case 'rosa':
      convercao = '#FFCBDB';
        break;
    
     case 'lilas':
      convercao = '#C8A2C8';
       break;
    
     case 'verde':
      convercao = '#008000';
       break;
    
     case 'preto':
      convercao = '#000000';
       break; 
    
     case 'azul':
      convercao = '#0000FF';
       break; 
    
    default:
      return 'Não temos o equivalente hexadecimal para ' + cor + '.';
  }
  return 'O hexadecimal para a cor ' + cor + ' é ' + convercao + '.';
  
}  

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(converToHex( 'rosa' ));
console.log(converToHex( 'lilas' ));
console.log(converToHex(  'verde' ));
console.log(converToHex( 'azul' ));
console.log(converToHex( 'preto' ));
console.log(converToHex( 'vermelho' ));
console.log(converToHex( 'roxo' ));
console.log(converToHex( 'amarelo' ));
