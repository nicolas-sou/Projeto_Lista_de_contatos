    const form = document.getElementById('form-lista');
    const resultado = [];

let linhas = '';

    form.addEventListener('submit', function(e) {
    e.preventDefault();

    adiciomaLinha();
    atualisaTabela();

});

function adiciomaLinha() {
    const inputColoqueNome = document.getElementById('nomelista');
    const inputColoqueTelefone = document.getElementById('telefonelista');

    resultado.push(inputColoqueTelefone.value)


    var tabela = "<tr>";
    tabela += `<td>${inputColoqueNome.value}</td>`;
    tabela += `<td>${inputColoqueTelefone.value}</td>`;

    tabela += "</tr>";

    linhas += tabela;

    inputColoqueNome.value = " ";
    inputColoqueTelefone.value = " ";
}

function atualisaTabela(){
    const contato = document.querySelector ('tbody');
    contato.innerHTML = linhas;
}