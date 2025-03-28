package com.testelemontech.solicitacoes.service;

import com.testelemontech.solicitacoes.model.ModelRequest;
import com.testelemontech.solicitacoes.repository.ModelRequestRepository;
import com.testelemontech.solicitacoes.config.WsClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class ModelRequestService {

    @Autowired
    private ModelRequestRepository modelRequestRepository;

    @Autowired
    private WsClient wsClient;

    // Método para buscar todos os registros no banco de dados
    public List<ModelRequest> getAllModelRequests() {
        return modelRequestRepository.findAll();
    }

    // Método para sincronizar as solicitações com o WS e atualizar o banco de dados
    public List<ModelRequest> sincronizarSolicitacoes() {
        LocalDateTime startDate = LocalDate.now().minusMonths(3).atStartOfDay();
        LocalDateTime endDate = LocalDate.now().atStartOfDay();

        List<ModelRequest> modelRequests = wsClient.BuscarSolicitacoes(startDate, endDate);

        // Verifica se encontrou solicitações e faz o log adequado
        if (modelRequests != null && !modelRequests.isEmpty()) {
            System.out.println("Synchronizing " + modelRequests.size() + " requests.");
            modelRequestRepository.saveAll(modelRequests);
        } else {
            System.out.println("No new requests found.");
        }

        return modelRequests;
    }
}
