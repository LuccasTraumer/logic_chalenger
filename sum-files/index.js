let isEqual = false;

array = [3, 5, -4, 8, 11, 1, -1, 6];
targetSum = 10

let arrayReturn = []
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if ((array[i] + array[j] === targetSum) && (arrayReturn.length <= 1) && i !== j) {
            arrayReturn.push(array[i])
            arrayReturn.push(array[j])
        }
    }
}

if (arrayReturn.length === 0) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] < 0 || array[j] < 0) {
                if ((array[i] + array[j] === targetSum) && (arrayReturn.length <= 1) && i !== j) {
                    arrayReturn.push(array[i])
                    arrayReturn.push(array[j])
                }
            } else {
                if ((array[i] - array[j] === targetSum) && (arrayReturn.length <= 1) && i !== j) {
                    arrayReturn.push(array[i])
                    arrayReturn.push(array[j])
                }
            }
        }
    }
}

console.warn(arrayReturn)
/*
* TODO:
*  - Array vai ter no minimo dois valores
*  - Ordenar o array. Caso o ultimo item do array, seja MENOR que o target, utiliza-lo como base.
*    - Pegar o ultimo numero, subtrai do target e busca essa diferenca no array.
*  - Caso tenha um numero que seja o ANTERIOR ao target pegar ele. E depois buscar por um numero UM, pois somando os dois dará o target.
*  -
*
* OUTRA SOLU;ÁO
*
* - Percorrer o array e ir somando, verificando se o resultado da soma entre dois elementos é igual ao target.
*   - Dividi o target por dois e inicia a partir da metade para efetuar a soma.
*   - Divido pego o valor do meio e verifico se o restop da subtra;áo entre o meio e o target existe no array.
* */