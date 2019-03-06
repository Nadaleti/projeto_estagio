package com.opussoftware.femanager.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Jogo {
	
	@Id
	@GeneratedValue
	private int id;
	
	private String nome;
	private Date ano_lancamento;
	private String plataforma;
	
	@ManyToMany(mappedBy="jogos")
    private List<Heroi> herois;

	public Jogo() {}

	public Date getAno_lancamento() {
		return ano_lancamento;
	}

	public int getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public String getPlataforma() {
		return plataforma;
	}

	public void setAno_lancamento(Date ano_lancamento) {
		this.ano_lancamento = ano_lancamento;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setPlataforma(String plataforma) {
		this.plataforma = plataforma;
	}
	
}
