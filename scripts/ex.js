function somarElementos(array){

    let soma = 0;
    for (let i = 0; i < array.lenght; i++){

        soma += array[i];
    }
    return soma;


}

console.log(somarElementos([1,2,3,4]));

