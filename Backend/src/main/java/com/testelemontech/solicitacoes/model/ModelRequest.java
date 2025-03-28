package com.testelemontech.solicitacoes.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDateTime;

@Setter
@Getter
@Entity
@Table(name = "model_request")
public class ModelRequest implements Serializable {

    // Getters e Setters
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomePassageiro;
    private String ciaAerea;
    private LocalDateTime dataHoraSaida;
    private LocalDateTime dataHoraChegada;
    private String cidadeOrigem;
    private String cidadeDestino;
    private String status;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    public ModelRequest() {}

}
