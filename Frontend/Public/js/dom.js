document.addEventListener('DOMContentLoaded', carregarSolicitacoes);
document.getElementById("solicitacaoForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    await adicionarSolicitacao();
});

async function carregarSolicitacoes() {
    const lista = document.getElementById("solicitacoesList");
    lista.innerHTML = '';
    const solicitacoes = await getSolicitacoes();
    solicitacoes.forEach(solicitacao => adicionarSolicitacaoNaLista(solicitacao));
}

function adicionarSolicitacaoNaLista(solicitacao) {
    const lista = document.getElementById("solicitacoesList");
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${solicitacao.nomePassageiro} - ${solicitacao.status}</span>
        <button class="delete" onclick="excluirSolicitacao(${solicitacao.id})">Excluir</button>
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
        alert("Preencha todos os campos.");
        return;
    }

    await addSolicitacao(novaSolicitacao);
    form.reset();
    carregarSolicitacoes();
}

async function excluirSolicitacao(id) {
    if (!confirm("Tem certeza que deseja excluir esta solicitação?")) return;
    await deleteSolicitacao(id);
    carregarSolicitacoes();
}
