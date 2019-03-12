package com.opussoftware.femanager.controllers;

import java.util.List;

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

import com.opussoftware.femanager.entities.Heroi;
import com.opussoftware.femanager.models.HeroiModel;
import com.opussoftware.femanager.services.HeroiService;

@RestController
public class HeroiController {
	@Autowired
	private HeroiService heroiService;
	
	// Get all herois
		@GetMapping(path = "/herois")
		public HeroiModel getAllHerois(@RequestParam("page") int page, 
				@RequestParam("pageSize") int pageSize, @RequestParam("sortParam") String sortParam,
				@RequestParam("sortType") String sortType) {
			System.out.println(sortParam + " " + sortType);
			return heroiService.getAllHeroi(page, pageSize, sortParam, sortType);
		}

		// Get um heroi
		@GetMapping(path = "/herois/{id}")
		public ResponseEntity<Heroi> getOneHeroi(@PathVariable Long id) {
			return ResponseEntity.of(this.heroiService.getOneHeroi(id));
		}

		// Get lista de herois por nome
		@GetMapping(path = "/herois/searchbyName")
		public List<Heroi> getHeroiByName(@RequestParam("nome") String nome) {
			return this.heroiService.getHeroiByName(nome);
		}
		
		// Get lista de herois por nome
		@GetMapping(path = "/herois/searchByClasse")
		public List<Heroi> getHeroiByClasse(@RequestParam("nome") String nome) {
			return this.heroiService.getHeroiByClasse(nome);
		}
		
		// Get lista de herois por nome
		@GetMapping(path = "/herois/searchByMov")
		public List<Heroi> getHeroiByMovimentacao(@RequestParam("nome") String nome) {
			return this.heroiService.getHeroiByMovimentacao(nome);
		}

		// Criar heroi
		@PostMapping(path = "/herois")
		public ResponseEntity<Object> saveHeroi(@RequestBody Heroi heroi) {
			if (this.heroiService.saveHeroi(heroi) != null) {
				return ResponseEntity.badRequest().build();
			}

			return ResponseEntity.status(HttpStatus.CREATED).build();
		}

		// Delete heroi
		@DeleteMapping(path = "/herois/{id}")
		public ResponseEntity<Object> deleteHeroi(@PathVariable Long id) {
			if (!this.heroiService.deleteHeroi(id)) {
				return ResponseEntity.notFound().build();
			}

			return ResponseEntity.ok().build();
		}

		// Atualizar heroi
		@PutMapping(path = "/herois/{id}")
		public ResponseEntity<Object> updateHeroi(@RequestBody Heroi heroi, @PathVariable Long id) {
			if (this.heroiService.updateHeroi(heroi, id) != null) {
				return ResponseEntity.notFound().build();
			}

			return ResponseEntity.ok().build();
		}
}
