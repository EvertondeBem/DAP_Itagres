function calcularPesoFinal() {
    // Obtendo os valores dos campos de entrada
    const pesoMolhado = parseFloat(document.getElementById('pesoMolhado').value);
    const pesoSeco = parseFloat(document.getElementById('pesoSeco').value);

    // Realizando os cálculos conforme as fórmulas fornecidas
    const resultado1 = pesoMolhado * 0.9901;
    const resultado2 = pesoSeco - resultado1;
    const valorFinal = pesoSeco / resultado2;

    // Exibindo o resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Valor Final: ${valorFinal.toFixed(2)}`;

    // Armazenando o resultado no histórico
    const historico = JSON.parse(localStorage.getItem('historico')) || [];
    historico.push(valorFinal.toFixed(2));
    if (historico.length > 5) {
        historico.shift();
    }
    localStorage.setItem('historico', JSON.stringify(historico));

    // Exibindo o histórico na página
    const historicoElement = document.getElementById('historico');
    historicoElement.innerHTML = '';
    historico.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = resultado;
        historicoElement.appendChild(li);
    });
}

// Carregar o histórico ao carregar a página pela primeira vez
window.onload = function () {
    const historico = JSON.parse(localStorage.getItem('historico')) || [];
    const historicoElement = document.getElementById('historico');
    historicoElement.innerHTML = '';
    historico.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = resultado;
        historicoElement.appendChild(li);
    });
};