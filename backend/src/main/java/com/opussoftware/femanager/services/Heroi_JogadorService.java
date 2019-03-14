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
	public Heroi_jogador summon(Heroi_jogador heroi_jogador) {
		Optional<Jogador> jogador = this.jogadorService.findOne(heroi_jogador.getJogador().getId());
		
		if (!jogador.isPresent()) {
			return null;
		}
		
		Random rand = new Random();
		List<Heroi> herois = this.heroiService.getAllHeroi();
		
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
