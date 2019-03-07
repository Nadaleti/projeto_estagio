package com.opussoftware.femanager.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Equipe {

	@Id
	@GeneratedValue
	private int id;

	@Size(min=2, max=50)
	private String nome;

	@ManyToOne
	@JoinColumn
	private Jogador jogador;

	@OneToOne
	@NotNull
	private Heroi_jogador heroi_1;
	
	@OneToOne
	private Heroi_jogador heroi_2;	
	
	@OneToOne
	private Heroi_jogador heroi_3;
	
	@OneToOne
	private Heroi_jogador heroi_4;

	public Equipe() {}

	public Equipe(int id, @Min(2) @Max(50) String nome, Jogador jogador, @NotNull Heroi_jogador heroi_1,
			Heroi_jogador heroi_2, Heroi_jogador heroi_3, Heroi_jogador heroi_4) {
		super();
		this.id = id;
		this.nome = nome;
		this.jogador = jogador;
		this.heroi_1 = heroi_1;
		this.heroi_2 = heroi_2;
		this.heroi_3 = heroi_3;
		this.heroi_4 = heroi_4;
	}



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
