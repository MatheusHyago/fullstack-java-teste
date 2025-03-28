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

    public List<ModelRequest> getAllModelRequests() {
        return modelRequestRepository.findAll(); // ✅ Agora o método existe!
    }

    public List<ModelRequest> sincronizarSolicitacoes() {
        LocalDateTime startDate = LocalDate.now().minusMonths(3).atStartOfDay();
        LocalDateTime endDate = LocalDate.now().atStartOfDay();

        List<ModelRequest> modelRequests = wsClient.BuscarSolicitacoes(startDate, endDate);

        if (modelRequests != null && !modelRequests.isEmpty()) {
            modelRequestRepository.saveAll(modelRequests);
        }

        return modelRequests;
    }
}
