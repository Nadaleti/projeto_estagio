package com.opussoftware.femanager.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Jogador {

	@Id
	@GeneratedValue
	private int id;

	private String nome;
	private String sexo;
	private int max_herois;
	private int num_herois;

	// private Heroi heroi;

	public Jogador() {}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public int getMax_herois() {
		return max_herois;
	}

	public void setMax_herois(int max_herois) {
		this.max_herois = max_herois;
	}

	public int getNum_herois() {
		return num_herois;
	}

	public void setNum_herois(int num_herois) {
		this.num_herois = num_herois;
	}
}
