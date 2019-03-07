package com.opussoftware.femanager.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Equipe {

	@Id
	@GeneratedValue
	private int id;

	private String nome;

	@ManyToOne
	@JoinColumn
	private Jogador jogador;

	
	private Heroi_jogador heroi_1;
	private Heroi_jogador heroi_2, heroi_3, heroi_4;

	public Equipe() {}

	public Heroi_jogador getHeroi_1() {
		return heroi_1;
	}

	public Heroi_jogador getHeroi_2() {
		return heroi_2;
	}

	public Heroi_jogador getHeroi_3() {
		return heroi_3;
	}

	public Heroi_jogador getHeroi_4() {
		return heroi_4;
	}

	public int getId() {
		return id;
	}

	public Jogador getJogador() {
		return jogador;
	}

	public String getNome() {
		return nome;
	}

	public void setHeroi_1(Heroi_jogador heroi_1) {
		this.heroi_1 = heroi_1;
	}

	public void setHeroi_2(Heroi_jogador heroi_2) {
		this.heroi_2 = heroi_2;
	}

	public void setHeroi_3(Heroi_jogador heroi_3) {
		this.heroi_3 = heroi_3;
	}

	public void setHeroi_4(Heroi_jogador heroi_4) {
		this.heroi_4 = heroi_4;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setJogador(Jogador jogador) {
		this.jogador = jogador;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

}
