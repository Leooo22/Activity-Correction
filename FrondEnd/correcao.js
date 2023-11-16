// Função para verificar a aprovação do aluno
function verificarAprovacao() {
    var mediaSpan = document.getElementById('media');
    var media = parseFloat(mediaSpan.textContent);
    var faltasInput = document.getElementById('faltas');
    var faltas = parseInt(faltasInput.value);

    if (!isNaN(media) && !isNaN(faltas)) {
        if (media >= 6.0 && faltas <= 10) {
            alert('Aluno Aprovado!');
        } else {
            alert('Aluno Reprovado!');
        }
    } else {
        alert('Preencha a nota e o número de faltas corretamente.');
    }
}
// Função para verificar se a tecla pressionada é "Enter" e adicionar a nota
function verificarTecla(e) {
    if (e.key === "Enter") {
        calcularMedia();
    }
}

// Adicione um evento de ouvinte de teclado ao campo de entrada
var notaInput = document.getElementById('nota');
notaInput.addEventListener('keypress', verificarTecla);

// Botão de Voltar para a tela inicial
function voltar() {
    window.location.href = 'Aprovação.html';
}
function limparDados() {
    // Limpa o array de alunos
    alunos = [];

    // Limpa os campos de entrada
    document.getElementById('nome-input').value = '';
    document.getElementById('nota-input').value = '';
    document.getElementById('faltas-input').value = '';

    // Limpa a tabela de notas e a média
    var tabelaNotas = document.getElementById('tabela-notas');
    tabelaNotas.innerHTML = '';

    var mediaSpan = document.getElementById('media');
    mediaSpan.textContent = '0.00';
}

