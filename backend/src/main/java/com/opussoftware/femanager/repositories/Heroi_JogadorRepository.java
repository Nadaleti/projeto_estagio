package com.opussoftware.femanager.repositories;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.opussoftware.femanager.entities.Heroi;
import com.opussoftware.femanager.entities.Heroi_jogador;

public interface Heroi_JogadorRepository extends JpaRepository<Heroi_jogador, Long>{

	List<Heroi_jogador> findByNomeContaining(String string, Sort sort);

	List<Heroi_jogador> findByClasseContaining(String string, Sort sort);

	List<Heroi_jogador> findByMovimentacaoContaining(String string, Sort sort);
	
	@Query("SELECT h FROM Heroi h WHERE lower(h.nome) like :nome" + " AND lower(h.classe) like :classe"
			+ " AND lower(h.movimentacao) like :movimentacao")
	public List<Heroi_jogador> findByNomeAndClasseAndMovimentacao(String nome, String classe, String movimentacao,Sort sort);
	
}
