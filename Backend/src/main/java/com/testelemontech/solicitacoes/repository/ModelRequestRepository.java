package com.testelemontech.solicitacoes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.testelemontech.solicitacoes.model.ModelRequest;
import org.springframework.stereotype.Repository;

@Repository
public interface ModelRequestRepository extends JpaRepository<ModelRequest, Long> {

}
