package com.opussoftware.femanager.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.opussoftware.femanager.entities.Heroi_jogador;
import com.opussoftware.femanager.entities.Jogador;
import com.opussoftware.femanager.services.Heroi_JogadorService;

@RestController
public class Heroi_JogadorController {
	
	@Autowired
	private Heroi_JogadorService heroi_JogadorService;
	
	@PostMapping(path = "/summon")
	public Heroi_jogador summon(@RequestBody Heroi_jogador heroi_jogador) {
		return this.heroi_JogadorService.summon(heroi_jogador);
	}
	
	@GetMapping(path = "/summon/jogadores")
	public List<Jogador> getAllJogadores() {
		return this.heroi_JogadorService.getAllJogadores();
	}
}
