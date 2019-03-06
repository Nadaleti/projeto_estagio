package com.opussoftware.femanager.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Heroi_jogador {

	@Id
	private int id;

	@ManyToOne
	private Heroi heroi;

	@ManyToOne
	private Jogador jogador;

	private int raridade;
	private int level;

	public Heroi_jogador() {}

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
