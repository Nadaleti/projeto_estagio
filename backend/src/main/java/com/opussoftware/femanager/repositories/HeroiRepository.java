package com.opussoftware.femanager.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.opussoftware.femanager.entities.Heroi;

public interface HeroiRepository extends JpaRepository<Heroi, Long> {
	
	public List<Heroi> findByNomeContaining(String nome);

	public List<Heroi> findByClasseContaining(String nome);
	
	public List<Heroi> findByMovimentacaoContaining(String nome);
	
}
