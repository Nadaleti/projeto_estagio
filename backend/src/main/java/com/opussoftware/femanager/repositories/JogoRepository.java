package com.opussoftware.femanager.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.opussoftware.femanager.entities.Jogo;

@Repository
public interface JogoRepository extends JpaRepository<Jogo, Long> {
	@Query("select j from Jogo j where lower(j.nome) like :filter"
			+ " or lower(j.plataforma) like :filter")
	public List<Jogo> findByNomeOrPlataformaContaining(String filter);

}
