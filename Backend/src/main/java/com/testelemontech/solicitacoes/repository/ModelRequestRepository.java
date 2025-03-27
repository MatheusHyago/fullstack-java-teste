package com.testelemontech.solicitacoes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.testelemontech.solicitacoes.model.ModelRequest;

public interface ModelRequestRepository extends JpaRepository<ModelRequest, Long> {

}
