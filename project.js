function generateNumber() {
    const min = Math.ceil(parseInt(document.querySelector(".input_min").value));
    const max = Math.floor(parseInt(document.querySelector(".input_max").value));

    if (isNaN(min) || isNaN(max)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }

    if (min > max) {
        alert("O valor mínimo deve ser menor ou igual ao valor máximo.");
        return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('resultado').value = result;
}
