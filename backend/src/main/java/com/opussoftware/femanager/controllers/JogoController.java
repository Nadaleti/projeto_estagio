package com.opussoftware.femanager.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.opussoftware.femanager.entities.Jogo;
import com.opussoftware.femanager.models.JogoModel;
import com.opussoftware.femanager.services.JogoService;

@RestController
public class JogoController {

	@Autowired
	private JogoService jogoService;

	// Get all jogos
	@GetMapping(path = "/jogos")
	public JogoModel getAllJogos(@RequestParam("page") int page, @RequestParam("pageSize") int size, @RequestParam("filter") String filter) {
		return jogoService.getAllJogos(page, size, filter);
	}

	// Criar jogo
	@PostMapping(path = "/jogos")
	public ResponseEntity<Object> saveJogo(@RequestBody Jogo jogo) {
		if (this.jogoService.saveJogo(jogo) != null) {
			return ResponseEntity.badRequest().build();
		}

		return ResponseEntity.status(HttpStatus.CREATED).build();
	}

	// Delete jogo
	@DeleteMapping(path = "/jogos/{id}")
	public ResponseEntity<Object> deleteJogo(@PathVariable Long id) {
		if (!this.jogoService.deleteJogo(id)) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok().build();
	}

	// Atualizar jogo
	@PutMapping(path = "/jogos/{id}")
	public ResponseEntity<Object> updateJogo(@RequestBody Jogo jogo, @PathVariable Long id) {
		if (this.jogoService.updateJogo(jogo, id) == null) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok().build();
	}
}
