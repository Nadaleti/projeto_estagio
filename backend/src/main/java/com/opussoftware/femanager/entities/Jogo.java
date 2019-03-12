package com.opussoftware.femanager.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Jogo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Size(min = 2, max = 100)
	private String nome;
	
	private int ano_lancamento;
	
	@Size(min = 2, max = 50)
	private String plataforma;

	@JsonIgnore
	@ManyToMany(mappedBy = "jogos")
	private List<Heroi> herois;

	public Jogo() {
	}

	public Jogo(Long id, @Size(min = 2, max = 100) String nome, int ano_lancamento,
			@Size(min = 2, max = 50) String plataforma, List<Heroi> herois) {
		super();
		this.id = id;
		this.nome = nome;
		this.ano_lancamento = ano_lancamento;
		this.plataforma = plataforma;
		this.herois = herois;
	}

	public int getAno_lancamento() {
		return ano_lancamento;
	}

	public List<Heroi> getHerois() {
		return herois;
	}

	public Long getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public String getPlataforma() {
		return plataforma;
	}

	public void setAno_lancamento(int ano_lancamento) {
		this.ano_lancamento = ano_lancamento;
	}

	public void setHerois(List<Heroi> herois) {
		this.herois = herois;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setPlataforma(String plataforma) {
		this.plataforma = plataforma;
	}

}
