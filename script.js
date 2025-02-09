let carrinho = [];

function adicionarAoCarrinho(nomeProduto, preco) {
    const item = { nome: nomeProduto, preco: preco };
    carrinho.push(item);
    exibirCarrinho();
}

function exibirCarrinho() {
    const carrinhoDiv = document.getElementById('itens-carrinho');
    carrinhoDiv.innerHTML = '';
    carrinho.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `<p>${item.nome} - R$ ${item.preco}</p>`;
        carrinhoDiv.appendChild(itemDiv);
    });
}

function finalizarCompra() {
    let mensagem = 'Olá, gostaria de comprar os seguintes itens:\n\n';
    carrinho.forEach(item => {
        mensagem += `${item.nome} - R$ ${item.preco}\n`;
    });
    mensagem += '\nTotal: R$ ' + carrinho.reduce((total, item) => total + item.preco, 0);

    const url = `https://wa.me/55279999269303?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}
