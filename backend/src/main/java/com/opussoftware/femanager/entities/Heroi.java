package com.opussoftware.femanager.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

@Entity
public class Heroi {
	
	@Id
	@GeneratedValue
	private int id;
	
	private String nome;
	private String alcunha;
	private int hp;
	private int atk;
	private int spd;
	private int def;
	private int res;
	private String classe;

	private String movimentacao;

	private String img;
	@ManyToMany
	    @JoinTable(name="heroi_jogo", joinColumns=
	    {@JoinColumn(name="heroi_id")}, inverseJoinColumns=
	      {@JoinColumn(name="jogo_id")})
	    private List<Jogo> jogos;
	public Heroi() {}
	
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

	public int getId() {
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

	public void setId(int id) {
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
