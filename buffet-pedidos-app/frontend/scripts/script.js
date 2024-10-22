// Variáveis para armazenar os itens selecionados
let salgadosSelecionados = [];
let docesSelecionados = [];

// Função para atualizar a lista de salgados selecionados
function atualizarSalgados() {
    const checkboxesSalgados = document.querySelectorAll('input[name="salgado"]:checked');
    salgadosSelecionados = [];

    checkboxesSalgados.forEach((checkbox) => {
        salgadosSelecionados.push(checkbox.value);
    });

    localStorage.setItem('salgadosSelecionados', JSON.stringify(salgadosSelecionados));
}

// Função para atualizar a lista de doces selecionados
function atualizarDoces() {
    const checkboxesDoces = document.querySelectorAll('input[name="doce"]:checked');
    docesSelecionados = [];

    checkboxesDoces.forEach((checkbox) => {
        docesSelecionados.push(checkbox.value);
    });

    localStorage.setItem('docesSelecionados', JSON.stringify(docesSelecionados));
}

// Adiciona event listeners aos checkboxes de salgados e doces
document.querySelectorAll('input[name="salgado"]').forEach((checkbox) => {
    checkbox.addEventListener('change', atualizarSalgados);
});

document.querySelectorAll('input[name="doce"]').forEach((checkbox) => {
    checkbox.addEventListener('change', atualizarDoces);
});
