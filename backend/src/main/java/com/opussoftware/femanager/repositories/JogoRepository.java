package com.opussoftware.femanager.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.opussoftware.femanager.entities.Jogo;

@Repository
public interface JogoRepository extends JpaRepository<Jogo, Long> {
	
	public List<Jogo> findByNomeContaining(String nome);

}
