//problema
/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

//Resolução
import * as fs from "fs-extra";

interface DataInterface {
    dia: number;
    valor: number;
}

function loadData(path: string): DataInterface[] {
    const dados = fs.readFileSync(path, 'utf-8');
    return JSON.parse(dados);
}

function menorValorFaturamento(faturamento: DataInterface[]): number {
    const valoresValidos = faturamento.filter(dia => dia.valor > 0);
    return Math.min(...valoresValidos.map(dia => dia.valor));
}

function MenorValorFaturamento(faturamento: DataInterface[]): number {
    const valoresValidos = faturamento.filter(dia => dia.valor > 0);
    return Math.max(...valoresValidos.map(dia => dia.valor));
}

function diasAcimaDaMedia(faturamento: DataInterface[]): number {
    const valoresValidos = faturamento.filter(dia => dia.valor > 0);
    const soma = valoresValidos.reduce((acc:number, dia:DataInterface) => acc + dia.valor, 0);
    const media = soma / valoresValidos.length;
    return valoresValidos.filter(dia => dia.valor > media).length;
}

(function main(): void {
    const faturamento = loadData('src/p3_data.json');
    console.log('Menor valor de faturamento:', menorValorFaturamento(faturamento));
    console.log('Maior valor de faturamento:', MenorValorFaturamento(faturamento));
    console.log('Dias acima da média:', diasAcimaDaMedia(faturamento));
})();
