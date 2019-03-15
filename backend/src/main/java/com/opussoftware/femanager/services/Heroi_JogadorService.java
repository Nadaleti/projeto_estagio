package com.opussoftware.femanager.services;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.opussoftware.femanager.entities.Heroi;
import com.opussoftware.femanager.entities.Heroi_jogador;
import com.opussoftware.femanager.entities.Jogador;
import com.opussoftware.femanager.repositories.Heroi_JogadorRepository;

@Service
public class Heroi_JogadorService {
	
	private static final int[] RARIDADES = {3,4,3,4,3,4,3,4,3,5};	
	@Autowired
	private Heroi_JogadorRepository heroi_JogadorRepository;
	
	@Autowired
	private JogadorService jogadorService;
	
	@Autowired
	private HeroiService heroiService;

	// Adicionar novo heroi_jogador
	public Heroi_jogador summon(Heroi_jogador heroi_jogador, String color) {
		Optional<Jogador> jogador = this.jogadorService.findOne(heroi_jogador.getJogador().getId());
		
		if (!jogador.isPresent()) {
			return null;
		}
		
		jogador.get().addHeroi();
		
		Random rand = new Random();
		
		String classColor;
		if (color.equals("red")) {
			classColor = "sword";
		} else if (color.equals("blue")) {
			classColor = "lance";
		} else if (color.equals("green")) {
			classColor = "axe";
		} else {
			classColor = "staff";
		}
		
		List<Heroi> herois = this.heroiService.getHeroiByClass(color, classColor);
		
		Heroi heroi = herois.get(rand.nextInt(herois.size()));		
		
		heroi_jogador.setHeroi(heroi);
		heroi_jogador.setJogador(jogador.get());
		heroi_jogador.setRaridade(RARIDADES[rand.nextInt(10)]);
		
		return this.heroi_JogadorRepository.saveAndFlush(heroi_jogador);
	}

	public List<Jogador> getAllJogadores() {
		return this.jogadorService.getAllJogadores();
	}
}
