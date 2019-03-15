package com.opussoftware.femanager.models;

import java.util.List;

import com.opussoftware.femanager.entities.Heroi_jogador;
import com.opussoftware.femanager.entities.Jogador;

public class JogadorHeroiModel {

	private Jogador jogador;
	private List<Heroi_jogador> herois;

	public JogadorHeroiModel(Jogador jogador, List<Heroi_jogador> herois) {
		this.jogador = jogador;
		this.herois = herois;
	}

	public List<Heroi_jogador> getHerois() {
		return herois;
	}

	public Jogador getJogador() {
		return jogador;
	}

	public void setHerois(List<Heroi_jogador> herois) {
		this.herois = herois;
	}

	public void setJogador(Jogador jogador) {
		this.jogador = jogador;
	}

}
