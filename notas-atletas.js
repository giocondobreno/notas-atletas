function calcularMediaNotasAtletas(atletas){  

   for (const atleta of atletas) { 
    
    const notasOrdenadas = atleta.notas.toSorted((a, b) => a - b);
    
    const notasValidas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);
    
    const total = notasValidas.reduce(function(total, nota) {
        return total + nota;
    }, 0);
    
    const media = total / notasValidas.length;

    const mensagem = `
      Atleta: ${atleta.nome}
      Notas Obtidas: ${notasOrdenadas.join(",")}
      Média Válida: ${media.toFixed(2)}
    `;

    console.log(mensagem);

   }

}


let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

calcularMediaNotasAtletas(atletas);
