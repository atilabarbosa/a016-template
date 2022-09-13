// // Vamos criar um código que cria e recebe um array com os últimos 4 resultados da Mega-sena. Portanto, precisaremos de um array de arrays.

// const resultadosMegaSena = [
//   [6, 10, 23, 89, 12, 34],//0
//   [81, 12, 32, 65, 86, 4],//1
//   [10, 54, 8, 12, 58, 23],//2
//   [9, 3, 6, 10, 40, 50] //3
// ]
// // acessando cada array de sorteio manualmente
// resultadosMegaSena[0]
// resultadosMegaSena[1]
// resultadosMegaSena[2]
// resultadosMegaSena[3]


// /* 
// Depois, devemos verificar se o número de itens de cada array que contém os jogos contém exatamente 6 números para ser um sorteio válido da Mega-Sena.
// Caso seja diferente, imprima que é necessário alterar o número de itens do array.
// */

// //       inicial ;      limite                  ; a cada iteração soma 1 ao valor de i
// for (let i = 0; i < resultadosMegaSena.length; i++) {
//   if (resultadosMegaSena[i].length !== 6) {
//     alert(`resultado inválido do sorteio de índice ${resultadosMegaSena[i]}. Ele possui ${resultadosMegaSena[i].length} números, mas precisa ter 6.`)
//   } else {
//     console.log(`Confira os resultados da mega! ${resultadosMegaSena[i]}`)
//   }
// }

// for (let i= 0; i< resultadosMegaSena.length; i++){
//   console.log(`Sorteio ${i+1}:`)
//   for(let indice = 0; indice < resultadosMegaSena[i].length; indice++){
//     const sorteio = resultadosMegaSena[i] // variavel pra pegar cada sorteio
//     // console.log(sorteio[indice])
//     console.log(resultadosMegaSena[i][indice])
//   }
// }

// // Altere o laço externo do programa anterior para que ele seja um for… in (olha pro índice)
// // for (let indice in array)
// // pra (cada indice no array)

// // Altere o laço interno do programa anterior para que ele seja um for… of (olha pro elemento)
// // for (let elemento of array)
// // pra (cada elemento do array)

// for (let i in resultadosMegaSena) {
//   console.log(`Sorteio ${Number(i) + 1}:`)

//   for (let numero of resultadosMegaSena[i]) {
//     console.log(numero)
//   }
// }

// // EXERCÍCIO FINAL DE FIXAÇÃO
// const filmes = [
//   {
//     titulo: 'O Auto da Compadecida',
//     ano: 2000,
//     diretor: 'Guel Arraes',
//     elenco: [
//       'Selton Mello',
//       'Mateus Nachtergaele',
//       'Marco Nanini',
//       'Fernanda Montenegro',
//     ],
//   },
//   {
//     titulo: 'Carandiru',
//     ano: 2001,
//     diretor: 'Hector Babenco',
//     elenco: [
//       'Wagner Moura',
//       'José Carlos Vasconcelos',
//       'Ailton Graça',
//       'Caio Blat',
//     ],
//   },
//   {
//     titulo: 'Aquarius',
//     ano: 2012,
//     diretor: 'Kléber Mendonça Filho',
//     elenco: [
//       'Sônia Braga',
//       'Humberto Carrão',
//       'Maeve Jinkings',
//       'Bárbara Colen',
//     ],
//   },
// ]
// // escreva seu código abaixo 👇🏻

// // Use o array de filmes que esta no template
// // Crie um laço for para exibir o título, o ano e o diretor dos filmes como uma String
// // Crie um laço for dentro do primeiro, para concatenar o elenco numa String
// // A saída deve se parecer com:
// // “O Homem que copiava, de 2003, dirigido por Jorge Furtado”
// // “Tem no elenco: Lázaro Ramos, Leandra Leal, Pedro Cardoso”

// /*
// Como fazer:
// laço pra acessar cada filme {
//   console.log('titulo, ano, diretor')
//   console.log("estrelando: ")
//   laço no elenco{
//     cada pessoa no elenco
//   }
// }
// */

// // verifica cada objeto de filme que está no array principal
// for (let indiceFilme = 0; indiceFilme < filmes.length; indiceFilme++) {
//   // filmes[indiceFilme] é o objeto referente a cada filme. O indiceFilme indica o índice em que ele está
//   console.log(`${filmes[indiceFilme].titulo}, de ${filmes[indiceFilme].ano}, dirigido por ${filmes[indiceFilme].diretor}`)
//   console.log(`Tem no elenco:`)
//   // verifica cada elemento do array elenco dentro do objeto filmes[indiceFilme]
//   for (let indiceElenco = 0; indiceElenco< filmes[indiceFilme].elenco.length; indiceElenco++){
//     // imprime cada pessoa do elenco
//     //array principal[indice do elemento no array principal].propriedade acessada[indice do elemento no array interno]
//     console.log(filmes[indiceFilme].elenco[indiceElenco])
//   }
// }

// // 2. Altere o laço externo do programa anterior para que ele seja um for… in
// // 3. Altere o laço interno do programa anterior para que ele seja um for… of

// for (let indiceFilme in filmes) {
//   // filmes[indiceFilme] é o objeto referente a cada filme. 
//   // A variável indiceFilme indica o índice em que ele está
//   console.log(`${filmes[indiceFilme].titulo}, de ${filmes[indiceFilme].ano}, dirigido por ${filmes[indiceFilme].diretor}`)
//   console.log(`Tem no elenco:`)
//   // para cada pessoa do array de elenco dentro de filmes[indiceFilme]
//   for ( let pessoa of filmes[indiceFilme].elenco){
//     // imprime cada pessoa do elenco*
//     console.log(pessoa)
//   }
// }
// // * o "for.. of" já olha para o elemento em si, por isso basta usar a variável criada para acessar o valor, sem precisar referenciar o array em que ela está