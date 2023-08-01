function calcularPesoFinal() {
    const pesoMolhado = parseFloat(document.getElementById('pesoMolhado').value);
    const pesoSeco = parseFloat(document.getElementById('pesoSeco').value);

    const resultado1 = pesoMolhado * 0.9901;
    const resultado2 = pesoSeco - resultado1;
    const valorFinal = pesoSeco / resultado2;

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Resultado: ${valorFinal.toFixed(2)}`;
}