package com.opussoftware.femanager.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.opussoftware.femanager.entities.Jogador;
import com.opussoftware.femanager.models.JogadorModel;
import com.opussoftware.femanager.services.JogadorService;

@RestController
public class JogadorController {
	
	@Autowired
	private JogadorService jogadorService;
	
	@GetMapping(path="/jogadores")
	public JogadorModel getAllJogadores(@RequestParam("page") int page, @RequestParam("pageSize") int size, @RequestParam("filter") String filter) {
		return this.jogadorService.getAllJogadores(page, size, filter);
	}
	
	@PutMapping(path="/jogadores/{id}")
	public ResponseEntity<Jogador> updateJogador(@PathVariable Long id, @RequestBody Jogador jogador) {
		if (this.jogadorService.updateJogador(jogador, id) == null) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok().build();
	}
	
	@DeleteMapping(path="/jogadores/{id}")
	public ResponseEntity<Jogador> deleteJogador(@PathVariable Long id) {
		if (!this.jogadorService.deleteJogador(id)) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok().build();
	}
}
