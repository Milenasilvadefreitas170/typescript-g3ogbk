             /*Questão 4*/
/* Crie uma variável do tipo array */

let estudantes: string[ ] = ['Adib', 'Fernanda', 'John', 'Poliana', 'Samuel', 'Milena', 'Edilson'];

   /* letra A: imprimar o quinto estudante*/
       console.log(estudantes[5]);
/*letra B: imprimar o tamanho do array*/
       console.log(estudantes.length);
/*letra C: adicionei mais 3 estudantes no final do array*/
     let adicionar = estudantes.push('Mariana', 'Karol','Leticia');
        console.log(estudantes);
/*letra D: remover os estudantes da posição 3,4,5;*/
     var removedItem = estudantes.splice(3,3);
        console.log(estudantes);
/*letra E: percorrer o array*/
    for (let i: number = 0; i < estudantes.length; i++) {
    console.log(estudantes[i]);
}
