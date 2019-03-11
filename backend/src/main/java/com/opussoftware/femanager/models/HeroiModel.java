package com.opussoftware.femanager.models;

import java.util.List;

import com.opussoftware.femanager.entities.Heroi;

public class HeroiModel {

	private List<Heroi> herois;
	private int total;

	public HeroiModel(List<Heroi> herois, int total) {
		super();
		this.herois = herois;
		this.total = total;
	}

	public List<Heroi> getHerois() {
		return herois;
	}

	public void setHerois(List<Heroi> herois) {
		this.herois = herois;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

}
