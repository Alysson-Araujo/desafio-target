// Descrição

/*

2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e 
o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na
linguagem que desejar onde, informado um número, ele calcule a sequência de 
Fibonacci e retorne uma mensagem avisando se o número informado pertence ou 
não a sequência.

*/

//Resolução

import { Stack } from '@datastructures-js/stack';
function fibonacci(num: number): boolean {
    if (num < 0) return false;

    const stack = new Stack<number>();
    stack.push(0);
    stack.push(1);

    while (true) {
        const top = stack.pop();
        const second = stack.peek(); 

        const next = top + second; 

        stack.push(top);
        stack.push(next);

        if (next === num) return true;
        if (next > num) return false;
    }
}

// Como é um pouco chato receber valores do terminal quando está trabalhando com typescript,
// resolvi criar uma função que recebe o número como argumento e chama a função fibonacci.
function main(num: number): void {

    if (fibonacci(num)) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
}

main(10);
main(11);
main(13);
main(21);