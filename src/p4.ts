//Problema
/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  
*/

//Resolução

interface FaturamentoEstado {
    [estado: string]: number;
}

const faturamentoPorEstado: FaturamentoEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function CalcularFaturamentoTotal(faturamentoPorEstado: FaturamentoEstado): number {
    return Object.keys(faturamentoPorEstado).map(estado => faturamentoPorEstado[estado]).reduce((acc, valor) => acc + valor, 0);
}


function calcularPercentuais(faturamentoPorEstado: FaturamentoEstado, totalFaturamento: number): FaturamentoEstado {
    const percentuais: FaturamentoEstado = {};
    for (const estado in faturamentoPorEstado) {
        const percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
        percentuais[estado] = percentual;
    }
    return percentuais;
}

function exibirPercentuais(percentuais: FaturamentoEstado): void {
    for (const estado in percentuais) {
        console.log(`O percentual de ${estado} é: ${percentuais[estado].toFixed(2)}%`);
    }
}

(function main(): void {
    const totalFaturamento = CalcularFaturamentoTotal(faturamentoPorEstado);
    const percentuais = calcularPercentuais(faturamentoPorEstado, totalFaturamento);
    exibirPercentuais(percentuais);
})();