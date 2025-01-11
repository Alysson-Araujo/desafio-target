//Problema:
/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

//Resolução

//Eu fiz com pilha, por questão de praticidade. Não implementei minha própria pilha para não perder tempo.
import { Stack } from '@datastructures-js/stack';

function reverseString(str: string): void {
    const stack = new Stack<string>();
    let reversedString = '';

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    while (!stack.isEmpty()) {
        reversedString += stack.pop() as string; 
    }


    return console.log("String invertida: ", reversedString);
}

reverseString("Hello, World!");
reverseString("Casca de banana.");