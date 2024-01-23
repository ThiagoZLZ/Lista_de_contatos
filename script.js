const form = document.getElementById("lista");
let linhas = '';
const aviso = document.querySelector('h4');
const nome = [];
const ddd = [];
const telefone = [];

form.addEventListener('submit', function(evento){
    evento.preventDefault();

    adicinarLinha()
});

function adicinarLinha(){
    const inputNome = document.getElementById("nome");
    const inputDDD = document.getElementById("ddd");
    const inputTelefone = document.getElementById("telefone");

    if(nome.includes(inputNome.value) && telefone.includes(inputTelefone.value)){
       aviso.innerHTML = 'Esse contato já está na lista';
    }else{
        aviso.innerHTML = '';
        nome.push((inputNome.value));
        ddd.push((inputDDD));
        telefone.push((inputTelefone.value));

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>(${inputDDD.value}) ${inputTelefone.value}</td>`;
        linha += `</tr>`;

        linhas += linha;

        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }
    
    inputNome.value = '';
    inputDDD.value = '';
    inputTelefone.value = '';
}