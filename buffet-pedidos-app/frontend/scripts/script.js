document.querySelector('.button-image').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const salgadosSelecionados = [];
    const docesSelecionados = [];

    // Captura todos os checkboxes de salgados normais selecionados
    document.querySelectorAll('#salgados-lista input[type="checkbox"]:checked').forEach((checkbox) => {
        salgadosSelecionados.push(checkbox.value);
    });

    // Captura todos os checkboxes de salgados de forno selecionados
    document.querySelectorAll('#salgados-forno-lista input[type="checkbox"]:checked').forEach((checkbox) => {
        salgadosSelecionados.push(checkbox.value);
    });

    // Captura todos os checkboxes de doces finos selecionados
    document.querySelectorAll('#doces-finos-lista input[type="checkbox"]:checked').forEach((checkbox) => {
        docesSelecionados.push(checkbox.value);
    });

    // Captura todos os checkboxes de doces simples selecionados
    document.querySelectorAll('#doces-simples-lista input[type="checkbox"]:checked').forEach((checkbox) => {
        docesSelecionados.push(checkbox.value);
    });

    // Armazena os salgados e doces selecionados no localStorage
    localStorage.setItem('salgadosSelecionados', JSON.stringify(salgadosSelecionados));
    localStorage.setItem('docesSelecionados', JSON.stringify(docesSelecionados));

    // Redireciona para a página de resumo
    window.location.href = 'resumo.html';
});
