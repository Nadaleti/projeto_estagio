package com.opussoftware.femanager.repositories;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.opussoftware.femanager.entities.Heroi;

public interface HeroiRepository extends JpaRepository<Heroi, Long> {

	@Query("SELECT h FROM Heroi h WHERE lower(h.nome) like :nome" + " and lower(h.classe) like :classe"
			+ " and lower(h.movimentacao) like :movimentacao")
	public List<Heroi> findByNomeAndClasseAndMovimentacao(String nome, String classe, String movimentacao,Sort sort);

	public List<Heroi> findByNomeContaining(String nome, Sort sort);

	public List<Heroi> findByClasseContaining(String classe, Sort sort);

	public List<Heroi> findByMovimentacaoContaining(String movimentacao, Sort sort);

	@Query("SELECT h FROM Heroi h WHERE lower(h.classe) like :color or lower(h.classe) like :classColor")
	public List<Heroi> getHeroiByClass(String color, String classColor);

}
