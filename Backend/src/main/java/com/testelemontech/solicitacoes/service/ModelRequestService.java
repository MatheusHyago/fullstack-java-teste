package com.testelemontech.solicitacoes.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import com.testelemontech.solicitacoes.config.WsClient;
import com.testelemontech.solicitacoes.model.ModelRequest;
import com.testelemontech.solicitacoes.repository.ModelRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class ModelRequestService {

    private static final Logger logger = LoggerFactory.getLogger(ModelRequestService.class);

    @Autowired
    private WsClient wsClient;

    @Autowired
    private ModelRequestRepository modelRequestRepository;

    public List<ModelRequest> getAllModelRequests() {
        return modelRequestRepository.findAll();
    }

    public List<ModelRequest> sincronizarSolicitacoes() {
        LocalDate endDate = LocalDate.now();
        LocalDate startDate = endDate.minusMonths(3);

        // Convert LocalDate to LocalDateTime for the wsClient method
        LocalDateTime startDateTime = startDate.atStartOfDay();
        LocalDateTime endDateTime = endDate.atStartOfDay();

        // Fetches travel requests from an external API
        List<ModelRequest> modelRequests = wsClient.BuscarSolicitacoes(startDateTime, endDateTime);

        // Saves the fetched travel requests to the repository
        if (modelRequests != null && !modelRequests.isEmpty()) {
            modelRequestRepository.saveAll(modelRequests);
            logger.info("Numero de solicitações salvas: {}", modelRequests.size());
        } else {
            logger.warn("Não há solicitações para salvar.");
        }

        return modelRequests;
    }
}