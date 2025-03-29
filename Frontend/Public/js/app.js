const API_URL = 'http://localhost:8081/solicitacoes';

// 🟢 Carrega a lista de solicitações
async function carregarSolicitacoes() {
    const lista = document.getElementById("listaSolicitacoes");
    lista.innerHTML = "<tr><td colspan='5'>Carregando...</td></tr>";

    try {
        const response = await fetch(API_URL);
        const solicitacoes = await response.json();

        lista.innerHTML = "";
        solicitacoes.forEach(solicitacao => {
            const row = `<tr>
                <td>${solicitacao.id}</td>
                <td>${solicitacao.nomePassageiro}</td>
                <td>${solicitacao.cidadeOrigem}</td>
                <td>${solicitacao.cidadeDestino}</td>
                <td><button onclick="deletarSolicitacao(${solicitacao.id})">🗑</button></td>
            </tr>`;
            lista.innerHTML += row;
        });
    } catch (error) {
        console.error(error);
        lista.innerHTML = "<tr><td colspan='5'>Erro ao carregar</td></tr>";
    }
}

// 🟡 Cria uma nova solicitação
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

            try {
                const response = await fetch(API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(novaSolicitacao)
                });

                if (!response.ok) throw new Error("Erro ao criar");

                alert("Solicitação criada!");
                window.location.href = "index.html";
            } catch (error) {
                console.error(error);
                alert("Erro ao criar solicitação.");
            }
        });
    }
});

// 🔴 Deletar uma solicitação
async function deletarSolicitacao(id) {
    if (confirm("Tem certeza que deseja excluir?")) {
        try {
            await fetch(`${API_URL}/${id}`, { method: "DELETE" });
            alert("Solicitação excluída!");
            carregarSolicitacoes();
        } catch (error) {
            console.error(error);
            alert("Erro ao excluir.");
        }
    }
}

// ⚡️ Carrega a lista quando a página abrir
if (document.getElementById("listaSolicitacoes")) {
    carregarSolicitacoes();
}
