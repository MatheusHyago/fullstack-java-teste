package com.testelemontech.solicitacoes.controller;

import com.testelemontech.solicitacoes.model.ModelRequest;
import com.testelemontech.solicitacoes.service.ModelRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/solicitacoes")
@CrossOrigin(origins = "*")
public class ModelRequestController {

    @Autowired
    private ModelRequestService service;

    // Endpoint para retornar todas as solicitações armazenadas no banco
    @GetMapping
    public ResponseEntity<List<ModelRequest>> getAllSolicitacoes() {
        List<ModelRequest> solicitacoes = service.getAllModelRequests();
        if (solicitacoes.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(solicitacoes);
    }

    // Endpoint para sincronizar todas as solicitações
    @GetMapping("/sincronizar")
    public ResponseEntity<?> sincronizarSolicitacoes() {
        try {
            List<ModelRequest> novasSolicitacoes = service.sincronizarSolicitacoes();
            return ResponseEntity.ok(novasSolicitacoes.isEmpty() ? "Nenhuma nova solicitação encontrada." : novasSolicitacoes);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Erro ao sincronizar: " + e.getMessage());
        }
    }
}
