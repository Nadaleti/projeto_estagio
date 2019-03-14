package com.opussoftware.femanager.models;

import java.util.List;

import com.opussoftware.femanager.entities.Jogador;

public class JogadorModel {

	private List<Jogador> jogadores;
	private int total;

	public JogadorModel(List<Jogador> jogadores, int total) {
		this.jogadores = jogadores;
		this.total = total;
	}

	public List<Jogador> getJogadores() {
		return jogadores;
	}

	public void setJogadores(List<Jogador> jogadores) {
		this.jogadores = jogadores;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}
}
