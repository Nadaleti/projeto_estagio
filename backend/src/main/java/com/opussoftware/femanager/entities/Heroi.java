package com.opussoftware.femanager.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

@Entity
public class Heroi {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Size(min = 2, max = 50)
	private String nome;

	@Size(min = 2, max = 100)
	private String alcunha;

	@Min(0)
	@Max(100)
	private int hp;

	@Min(0)
	@Max(100)
	private int atk;

	@Min(0)
	@Max(100)
	private int spd;

	@Min(0)
	@Max(100)
	private int def;

	@Min(0)
	@Max(100)
	private int res;

	@Size(min = 2, max = 50)
	private String classe;

	@Size(min = 2, max = 50)
	private String movimentacao;

	private String img;

	@ManyToMany
	@JoinTable(name = "heroi_jogo", joinColumns = { @JoinColumn(name = "heroi_id") }, inverseJoinColumns = {
			@JoinColumn(name = "jogo_id") })
	private List<Jogo> jogos;

	public Heroi() {
	}

	public Heroi(Long id, @Size(min = 2, max = 50) String nome, @Size(min = 2, max = 100) String alcunha,
			@Min(0) @Max(100) int hp, @Min(0) @Max(100) int atk, @Min(0) @Max(100) int spd, @Min(0) @Max(100) int def,
			@Min(0) @Max(100) int res, @Size(min = 2, max = 50) String classe,
			@Size(min = 2, max = 50) String movimentacao, String img, List<Jogo> jogos) {
		super();
		this.id = id;
		this.nome = nome;
		this.alcunha = alcunha;
		this.hp = hp;
		this.atk = atk;
		this.spd = spd;
		this.def = def;
		this.res = res;
		this.classe = classe;
		this.movimentacao = movimentacao;
		this.img = img;
		this.jogos = jogos;
	}

	public String getAlcunha() {
		return alcunha;
	}
//	 Não tem necessidade, mas deixei comentado por precaução
//	 @OneToMany(mappedBy="heroi")
//	 private List<Heroi_jogador> jogadores;

	public int getAtk() {
		return atk;
	}

	public String getClasse() {
		return classe;
	}

	public int getDef() {
		return def;
	}

	public int getHp() {
		return hp;
	}

	public Long getId() {
		return id;
	}

	public String getImg() {
		return img;
	}

	public List<Jogo> getJogos() {
		return jogos;
	}

	public String getMovimentacao() {
		return movimentacao;
	}

	public String getNome() {
		return nome;
	}

	public int getRes() {
		return res;
	}

	public int getSpd() {
		return spd;
	}

	public void setAlcunha(String alcunha) {
		this.alcunha = alcunha;
	}

	public void setAtk(int atk) {
		this.atk = atk;
	}

	public void setClasse(String classe) {
		this.classe = classe;
	}

	public void setDef(int def) {
		this.def = def;
	}

	public void setHp(int hp) {
		this.hp = hp;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public void setJogos(List<Jogo> jogos) {
		this.jogos = jogos;
	}

	public void setMovimentacao(String movimentacao) {
		this.movimentacao = movimentacao;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setRes(int res) {
		this.res = res;
	}

	public void setSpd(int spd) {
		this.spd = spd;
	}

}
