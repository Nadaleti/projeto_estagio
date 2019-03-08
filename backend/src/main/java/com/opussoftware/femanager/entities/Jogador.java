package com.opussoftware.femanager.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

@Entity
public class Jogador {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Size(min = 2, max = 50)
	private String nome;
	
	@Size(min = 2, max = 15)
	private String sexo;
	
	@Min(300)
	@Max(1000)
	private int max_herois;
	
	@Min(0)
	private int num_herois;

	@OneToMany(mappedBy = "jogador")
	private List<Heroi_jogador> herois;

	@OneToMany(mappedBy = "jogador")
	private List<Equipe> equipes;

	@OneToOne
	private Heroi_jogador heroi_suporte;

	public Jogador() {
	}

	public Jogador(int id, @Size(min = 2, max = 50) String nome, @Size(min = 2, max = 15) String sexo,
			@Min(300) @Max(1000) int max_herois, @Min(0) int num_herois, List<Heroi_jogador> herois,
			List<Equipe> equipes, Heroi_jogador heroi_suporte) {
		super();
		this.id = id;
		this.nome = nome;
		this.sexo = sexo;
		this.max_herois = max_herois;
		this.num_herois = num_herois;
		this.herois = herois;
		this.equipes = equipes;
		this.heroi_suporte = heroi_suporte;
	}

	public List<Equipe> getEquipes() {
		return equipes;
	}

	public Heroi_jogador getHeroi_suporte() {
		return heroi_suporte;
	}

	public List<Heroi_jogador> getHerois() {
		return herois;
	}

	public int getId() {
		return id;
	}

	public int getMax_herois() {
		return max_herois;
	}

	public String getNome() {
		return nome;
	}

	public int getNum_herois() {
		return num_herois;
	}

	public String getSexo() {
		return sexo;
	}

	public void setEquipes(List<Equipe> equipes) {
		this.equipes = equipes;
	}

	public void setHeroi_suporte(Heroi_jogador heroi_suporte) {
		this.heroi_suporte = heroi_suporte;
	}

	public void setHerois(List<Heroi_jogador> herois) {
		this.herois = herois;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setMax_herois(int max_herois) {
		this.max_herois = max_herois;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setNum_herois(int num_herois) {
		this.num_herois = num_herois;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
}
