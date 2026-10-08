
// ======================================================
// BLOCO 1 – ARRAYS E MÉTODOS
// ======================================================

console.log("===== BLOCO 1: ARRAYS E MÉTODOS =====");

// 1. Array de nomes e uso do forEach

const nomes = ["Ana", "Carlos", "Mariana"];

nomes.forEach(function(nome) {
    console.log(`Olá, ${nome}!`);
});


// 2. Uso do map para colocar os nomes em maiúsculas

const nomesMaiusculos = nomes.map(function(nome) {
    return nome.toUpperCase();
});

console.log("Nomes em maiúsculas:", nomesMaiusculos);


// 3. Array de preços, filter e reduce

const precos = [10, 25, 40, 5, 60];

// filter: seleciona os preços acima de 20
const precosAcimaDe20 = precos.filter(function(preco) {
    return preco > 20;
});

console.log("Preços acima de 20:", precosAcimaDe20);

// reduce: soma todos os preços
const somaPrecos = precos.reduce(function(total, preco) {
    return total + preco;
}, 0);

console.log("Soma dos preços:", somaPrecos);


// 4. Array de objetos produtos

const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 80 },
    { nome: "Caneta", preco: 5 },
    { nome: "Estojo", preco: 25 }
];

// map: extrai os nomes dos produtos
const nomesProdutos = produtos.map(function(produto) {
    return produto.nome;
});

console.log("Nomes dos produtos:", nomesProdutos);

// filter: seleciona produtos com preço menor que 50
const produtosBaratos = produtos.filter(function(produto) {
    return produto.preco < 50;
});

console.log("Produtos abaixo de R$ 50:", produtosBaratos);

// reduce: soma os preços dos produtos
const totalProdutos = produtos.reduce(function(total, produto) {
    return total + produto.preco;
}, 0);

console.log("Valor total dos produtos: R$", totalProdutos);

// forEach: imprime o nome e o preço de cada produto
produtos.forEach(function(produto) {
    console.log(`Nome: ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
});


// ======================================================
// BLOCO 2 – MANIPULAÇÃO DO DOM
// ======================================================

console.log("===== BLOCO 2: MANIPULAÇÃO DO DOM =====");

// 1. Selecionar o título e alterar seu texto

const titulo = document.querySelector("#titulo");

titulo.textContent = "Blog do Dalas";


// 2. Selecionar todos os parágrafos e imprimir seus textos

const paragrafos = document.querySelectorAll(".texto");

paragrafos.forEach(function(paragrafo) {
    console.log("Texto do parágrafo:", paragrafo.textContent.trim());
});


// 3. Inserir dois itens na lista usando innerHTML

const lista = document.querySelector("#lista");

lista.innerHTML = `
    <li>Primeiro item</li>
    <li>Segundo item</li>
`;


// 4. Criar o terceiro item usando createElement

const terceiroItem = document.createElement("li");

terceiroItem.textContent = "Terceiro item";

lista.append(terceiroItem);


// 5. Adicionar a classe destaque e verificar se ela existe

terceiroItem.classList.add("destaque");

console.log(
    "O terceiro item possui a classe destaque?",
    terceiroItem.classList.contains("destaque")
);


// 6. Criar itens para o array de tarefas usando forEach

const tarefas = [
    "Estudar JS",
    "Fazer exercícios",
    "Revisar DOM"
];

tarefas.forEach(function(tarefa) {
    const item = document.createElement("li");

    item.textContent = tarefa;

    lista.append(item);
});

// Aplicar a classe feito ao primeiro li da lista
lista.querySelector("li").classList.add("feito");

// Imprimir a quantidade total de itens
console.log(
    "Quantidade total de itens na lista:",
    lista.querySelectorAll("li").length
);


// ======================================================
// BLOCO 3 – EVENTOS E EVENT DELEGATION
// ======================================================

console.log("===== BLOCO 3: EVENTOS E EVENT DELEGATION =====");

// 1. Evento click no botão

const botao = document.querySelector("#botao");

botao.addEventListener("click", function() {
    console.log("Clicou!");
});


// 2. Evento mouseover no botão

botao.addEventListener("mouseover", function() {
    botao.textContent = "Pode clicar!";
});


// 3. Evento keyup no campo de nome

const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", function() {
    console.log("Nome digitado:", campoNome.value);
});


// 4. EVENT DELEGATION
// Um único listener controla os cliques em todos os li da lista,
// incluindo os itens adicionados posteriormente.

lista.addEventListener("click", function(e) {

    // Verifica se o elemento clicado é um li
    if (e.target.tagName === "LI") {

        // Alterna a classe feito
        e.target.classList.toggle("feito");

        // Imprime o texto do item clicado
        console.log("Item clicado:", e.target.textContent);
    }

});


// Criar um novo li dinamicamente para testar o Event Delegation

const itemDinamico = document.createElement("li");

itemDinamico.textContent = "Item criado pelo JavaScript";

lista.append(itemDinamico);

// O clique nesse item também será detectado pelo listener da lista.


// 5. FORMULÁRIO – Adicionar novas tarefas

const formulario = document.querySelector("#formulario");

const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", function(e) {

    // Impede o recarregamento da página
    e.preventDefault();

    // Obtém o texto e remove espaços do início e do fim
    const textoTarefa = campoTarefa.value.trim();

    // Não adiciona nada se o campo estiver vazio
    if (textoTarefa === "") {
        console.log("Digite uma tarefa válida.");
        return;
    }

    // Cria um novo item
    const novaTarefa = document.createElement("li");

    novaTarefa.textContent = textoTarefa;

    // Adiciona o item à lista
    lista.append(novaTarefa);

    // Limpa o campo de texto
    campoTarefa.value = "";

    console.log("Tarefa adicionada:", textoTarefa);

});