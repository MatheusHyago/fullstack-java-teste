package com.testelemontech.solicitacoes.controller;

import com.testelemontech.solicitacoes.model.ModelRequest;
import com.testelemontech.solicitacoes.service.ModelRequestService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

import java.util.List;

/**
 * - GET /solicitacoes: Exibe todas as solicitações persistidas no banco.
 * - GET /sincronizar: Sincroniza solicitações do WebService e salva no banco.
 */
@RestController
@RequestMapping("/solicitacoes")
public class ModelRequestController {

    private final ModelRequestService service;

    public ModelRequestController(ModelRequestService service) {
        this.service = service;
    }

    // Endpoint para exibir todas as solicitações persistidas no banco
    @GetMapping
    public ResponseEntity<List<ModelRequest>> exibirSolicitacoes() {
        try {
            List<ModelRequest> solicitacoes = service.getAllModelRequests();  // Busca as solicitações persistidas
            return ResponseEntity.ok(solicitacoes);
        } catch (Exception e) {
            // Log do erro pode ser adicionado aqui
            return ResponseEntity.status(500).body(null);  // Retorna erro em caso de falha
        }
    }

    // Endpoint para sincronizar as solicitações via WebService e salvar no banco
    @GetMapping("/sincronizar")
    public ResponseEntity<List<ModelRequest>> sincronizarSolicitacoes() {
        try {
            List<ModelRequest> solicitacoes = service.sincronizarSolicitacoes();  // Sincroniza e salva as solicitações
            return ResponseEntity.ok(solicitacoes);
        } catch (Exception e) {
            // Log do erro pode ser adicionado aqui
            return ResponseEntity.status(500).body(null);  // Retorna erro em caso de falha
        }
    }
}
