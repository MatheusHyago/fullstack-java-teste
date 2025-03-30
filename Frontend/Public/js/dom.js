document.addEventListener('DOMContentLoaded', carregarSolicitacoes);

document.getElementById("solicitacaoForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    await adicionarSolicitacao();
});

async function carregarSolicitacoes() {
    const lista = document.getElementById("solicitacoesList");
    lista.innerHTML = "<li>Carregando...</li>";

    try {
        const solicitacoes = await getSolicitacoes(); 
        lista.innerHTML = ''; 

        solicitacoes.forEach(solicitacao => adicionarSolicitacaoNaLista(solicitacao)); 
    } catch (error) {
        console.error(error);
        lista.innerHTML = "<li>Erro ao carregar as solicitações.</li>"; 
    }
}

function adicionarSolicitacaoNaLista(solicitacao) {
    const lista = document.getElementById("solicitacoesList");
    const li = document.createElement("li");

    li.innerHTML = `
        <span>${solicitacao.nomePassageiro} - ${solicitacao.status || 'Status não definido'}</span>
    `;
    lista.appendChild(li); 
}

async function adicionarSolicitacao() {
    const form = document.getElementById("solicitacaoForm");

    const novaSolicitacao = {
        nomePassageiro: form.nomePassageiro.value.trim(),
        dataHoraChegada: form.dataHoraChegada.value,
        cidadeOrigem: form.cidadeOrigem.value.trim(),
        cidadeDestino: form.cidadeDestino.value.trim(),
        dataHoraSaida: form.dataHoraSaida.value,
        ciaAerea: form.ciaAerea.value.trim()
    };

    if (Object.values(novaSolicitacao).some(val => !val)) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    try {
        
        await addSolicitacao(novaSolicitacao);
        
        form.reset(); 

        carregarSolicitacoes(); 
    } catch (error) {
        console.error(error);
        alert("Erro ao adicionar a solicitação."); 
    }
}
