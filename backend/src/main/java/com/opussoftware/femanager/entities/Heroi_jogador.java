package com.opussoftware.femanager.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

@Entity
public class Heroi_jogador {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne
	@JoinColumn
	private Heroi heroi;

	@ManyToOne
	@JoinColumn
	private Jogador jogador;

	@Min(1)
	@Max(5)
	private int raridade;
	
	@Min(1)
	@Max(40)
	private int level;

	public Heroi_jogador() {}

	public Heroi_jogador(Long id, Heroi heroi, Jogador jogador, @Min(1) @Max(5) int raridade,
			@Min(1) @Max(40) int level) {
		super();
		this.id = id;
		this.heroi = heroi;
		this.jogador = jogador;
		this.raridade = raridade;
		this.level = level;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Heroi getHeroi() {
		return heroi;
	}

	public void setHeroi(Heroi heroi) {
		this.heroi = heroi;
	}

	public Jogador getJogador() {
		return jogador;
	}

	public void setJogador(Jogador jogador) {
		this.jogador = jogador;
	}

	public int getRaridade() {
		return raridade;
	}

	public void setRaridade(int raridade) {
		this.raridade = raridade;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

}
