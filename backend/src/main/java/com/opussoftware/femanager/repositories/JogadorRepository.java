package com.opussoftware.femanager.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.opussoftware.femanager.entities.Jogador;

public interface JogadorRepository extends JpaRepository<Jogador, Long> {

	List<Jogador> findByNomeContaining(String filter);

}
