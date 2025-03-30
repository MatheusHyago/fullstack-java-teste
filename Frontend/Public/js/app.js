const API_URL = 'http://localhost:8081/solicitacoes';

// Carrega a lista de solicitações
async function carregarSolicitacoes() {
    const lista = document.getElementById("listaSolicitacoes");
    lista.innerHTML = "<tr><td colspan='4'>Carregando...</td></tr>";

    try {
        const response = await fetch(API_URL);
        const solicitacoes = await response.json();

        lista.innerHTML = "";
        solicitacoes.forEach(solicitacao => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${solicitacao.id}</td>
                <td>${solicitacao.nomePassageiro}</td>
                <td>${solicitacao.cidadeOrigem}</td>
                <td>${solicitacao.cidadeDestino}</td>
            `;
            lista.appendChild(row);
        });
    } catch (error) {
        console.error(error);
        lista.innerHTML = "<tr><td colspan='4'>Erro ao carregar</td></tr>";
    }
}

// Cria uma nova solicitação
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formSolicitacao");
    if (form) {
        form.addEventListener("submit", async function(event) {
            event.preventDefault();
            const novaSolicitacao = {
                nomePassageiro: document.getElementById("nomePassageiro").value,
                ciaAerea: document.getElementById("ciaAerea").value,
                cidadeOrigem: document.getElementById("cidadeOrigem").value,
                cidadeDestino: document.getElementById("cidadeDestino").value,
                dataHoraSaida: new Date().toISOString(),
                dataHoraChegada: new Date().toISOString(),
                status: null
            };

            if (!novaSolicitacao.nomePassageiro || !novaSolicitacao.ciaAerea || !novaSolicitacao.cidadeOrigem || !novaSolicitacao.cidadeDestino) {
                alert("Todos os campos são obrigatórios.");
                return;
            }

            try {
                const response = await fetch(API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(novaSolicitacao)
                });

                if (!response.ok) throw new Error("Erro ao criar");

                alert("Solicitação criada!");
                carregarSolicitacoes(); // Atualiza a lista sem recarregar a página
            } catch (error) {
                console.error(error);
                alert("Erro ao criar solicitação.");
            }
        });
    }
});

// Carrega a lista quando a página abrir
if (document.getElementById("listaSolicitacoes")) {
    carregarSolicitacoes();
}
