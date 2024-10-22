document.getElementById('btn-resumo').addEventListener('click', function() {
 // Capturando informações do evento
 const nomeEvento = document.getElementById('nome-evento').value;
 const dataEvento = document.getElementById('data-evento').value;
 const horaEvento = document.getElementById('hora-evento').value;

 // Capturando os salgados selecionados
 const salgadosSelecionados = [];
 document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
     salgadosSelecionados.push(checkbox.value);
 });

 // Redirecionando para a página de resumo
 localStorage.setItem('nomeEvento', nomeEvento);
 localStorage.setItem('dataEvento', dataEvento);
 localStorage.setItem('horaEvento', horaEvento);
 localStorage.setItem('salgadosSelecionados', JSON.stringify(salgadosSelecionados));

 window.location.href = 'resumo.html';
});
