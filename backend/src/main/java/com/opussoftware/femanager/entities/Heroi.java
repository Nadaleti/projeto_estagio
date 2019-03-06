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
	 
//	 Não tem necessidade, mas deixei comentado por precaução
//	 @OneToMany(mappedBy="heroi")
//	 private List<Heroi_jogador> jogadores;
	
	public Heroi() {}

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

	public String getAlcunha() {
		return alcunha;
	}

	public void setAlcunha(String alcunha) {
		this.alcunha = alcunha;
	}

	public int getHp() {
		return hp;
	}

	public void setHp(int hp) {
		this.hp = hp;
	}

	public int getAtk() {
		return atk;
	}

	public void setAtk(int atk) {
		this.atk = atk;
	}

	public int getSpd() {
		return spd;
	}

	public void setSpd(int spd) {
		this.spd = spd;
	}

	public int getDef() {
		return def;
	}

	public void setDef(int def) {
		this.def = def;
	}

	public int getRes() {
		return res;
	}

	public void setRes(int res) {
		this.res = res;
	}

	public String getClasse() {
		return classe;
	}

	public void setClasse(String classe) {
		this.classe = classe;
	}

	public String getMovimentacao() {
		return movimentacao;
	}

	public void setMovimentacao(String movimentacao) {
		this.movimentacao = movimentacao;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}
	
	
}
