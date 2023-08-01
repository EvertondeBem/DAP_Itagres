function calcularPesoFinal() {
    const pesoMolhado = parseFloat(document.getElementById('pesoMolhado').value);
    const pesoSeco = parseFloat(document.getElementById('pesoSeco').value);

    const resultado1 = pesoMolhado * 0.9901;
    const resultado2 = pesoSeco - resultado1;
    const valorFinal = pesoSeco / resultado2;

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Valor Final: ${valorFinal.toFixed(2)}`;

    const historico = JSON.parse(localStorage.getItem('historico')) || [];
    historico.push(valorFinal.toFixed(2));
    if (historico.length > 5) {
        historico.shift();
    }
    localStorage.setItem('historico', JSON.stringify(historico));

    const historicoElement = document.getElementById('historico');
    historicoElement.innerHTML = '';
    historico.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = resultado;
        historicoElement.appendChild(li);
    });
}

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