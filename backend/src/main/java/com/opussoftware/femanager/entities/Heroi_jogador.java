package com.opussoftware.femanager.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

@Entity
public class Heroi_jogador {

	@Id
	private int id;

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

	public Heroi_jogador(int id, Heroi heroi, Jogador jogador, @Min(1) @Max(5) int raridade,
			@Min(1) @Max(40) int level) {
		super();
		this.id = id;
		this.heroi = heroi;
		this.jogador = jogador;
		this.raridade = raridade;
		this.level = level;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
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
