const API_URL = 'http://localhost:8081/solicitacoes';

// Criação da nova solicitação a partir dos dados inseridos no formulário
document.getElementById('btnCriar').addEventListener('click', async function() {

    const nomePassageiro = document.getElementById('nome_pax').value.trim();
    const cidadeOrigem = document.getElementById('origem').value.trim();
    const cidadeDestino = document.getElementById('destino').value.trim();
    const dataHoraSaida = document.getElementById('data_ida').value;
    const dataHoraChegada = document.getElementById('data_volta').value;


    if (!nomePassageiro || !cidadeOrigem || !cidadeDestino || !dataHoraSaida || !dataHoraChegada) {
        alert("Todos os campos são obrigatórios.");
        return;
    }

    // Gerar a solicitação fictícia com os dados inseridos
    const novaSolicitacao = {
        nomePassageiro,
        cidadeOrigem,
        cidadeDestino,
        dataHoraSaida,
        dataHoraChegada,
        status: "Pendente"
    };


    console.log('Solicitação Fictícia Criada:', novaSolicitacao);

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novaSolicitacao)
        });

        if (!response.ok) throw new Error('Erro ao criar solicitação');

        alert('Solicitação criada com sucesso!');
        window.location.href = 'home.html';  
    } catch (error) {
        console.error(error);
        alert('Erro ao criar solicitação.');
    }
});
