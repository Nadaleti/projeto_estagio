package com.opussoftware.femanager.models;

import java.util.List;

import com.opussoftware.femanager.entities.Jogo;

public class JogoModel {

	private List<Jogo> jogos;
	private int total;

	public JogoModel(List<Jogo> jogos, int total) {
		this.jogos = jogos;
		this.total = total;
	}

	public List<Jogo> getJogos() {
		return jogos;
	}

	public void setJogos(List<Jogo> jogos) {
		this.jogos = jogos;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

}
