function logout() {
    // Realize as ações de logout aqui, como redirecionar para a página de login ou limpar informações de sessão.
    alert('Você foi desconectado.'); // Exemplo: Mostrar uma mensagem de confirmação.
}
document.addEventListener("DOMContentLoaded", function() {
    const calcularBtn = document.getElementById("calcular-btn");
    const resultadosDiv = document.getElementById("resultados");

    calcularBtn.addEventListener("click", function() {
        const resultados = calcularSituacaoDosAlunos();
        resultadosDiv.innerHTML = resultados;
    });

    function calcularSituacaoDosAlunos() {
        // Obter as notas dos três bimestres
        const notaBimestre1 = parseFloat(document.getElementById("grade1").value);
        const notaBimestre2 = parseFloat(document.getElementById("grade2").value);
        const notaBimestre3 = parseFloat(document.getElementById("grade3").value);

        // Obter o número de faltas
        const faltas = parseInt(document.getElementById("faltas").value);

        console.log("Nota 1: " + notaBimestre1); // Verifique se as notas estão corretas
        console.log("Nota 2: " + notaBimestre2);
        console.log("Nota 3: " + notaBimestre3);
        console.log("Nota 4: " + notaBimestre4);
        console.log("Faltas: " + faltas);

        // Resto do seu código
        // ...

        // Adicione mais console.log para depurar o restante do código
    }
});

function salvarNotas() {
    const notas = document.getElementById('notas').value;
    
    // Verifica se o navegador suporta o armazenamento local
    if (typeof(Storage) !== 'undefined') {
        // Salva as notas na chave 'notas_professores'
        localStorage.setItem('notas_professores', notas);
        alert('Notas salvas com sucesso!');
    } else {
        alert('Desculpe, seu navegador não suporta armazenamento local.');
    }
}
window.onload = function() {
    const notasSalvas = localStorage.getItem('notas_professores');
    if (notasSalvas) {
        document.getElementById('notas').value = notasSalvas;
    }
};

function openTab(tabId) {
    const tabs = document.querySelectorAll('section');
    for (const tab of tabs) {
        tab.style.display = 'none';
    }
    document.getElementById(tabId).style.display = 'block';

    // Ocultar a barra de ferramentas quando uma aba é aberta
    const toolbar = document.getElementById('toolbar');
    toolbar.style.display = 'none';
}
function closeTab() {
    const tabs = document.querySelectorAll('section');
    for (const tab of tabs) {
        tab.style.display = 'none';
    }

    // Mostrar a barra de ferramentas quando nenhuma aba está aberta
    const toolbar = document.getElementById('toolbar');
    toolbar.style.display = 'flex';
}







