package com.opussoftware.femanager.controllers;

<<<<<<< HEAD
import java.util.List;
import java.util.Optional;

=======
>>>>>>> cb7e3f4856634a522f68823fb96cefca6144855b
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
import com.opussoftware.femanager.entities.Jogo;
import com.opussoftware.femanager.models.HeroiModel;
import com.opussoftware.femanager.services.HeroiService;

@RestController
public class HeroiController {
	@Autowired
	private HeroiService heroiService;
<<<<<<< HEAD
	
	// Get all herois
		@GetMapping(path = "/herois")
		public HeroiModel getAllHerois(@RequestParam("page") int page, 
				@RequestParam("pageSize") int pageSize, @RequestParam("sortParam") String sortParam,
				@RequestParam("sortType") String sortType, String nomeFilter,
				String classeFilter, String movFilter) {
			return heroiService.getAllHeroi(page, pageSize, sortParam, sortType, nomeFilter, classeFilter, movFilter);
		}
=======
>>>>>>> cb7e3f4856634a522f68823fb96cefca6144855b

	// Get all herois
	@GetMapping(path = "/herois")
	public HeroiModel getAllHerois(@RequestParam("page") int page, @RequestParam("pageSize") int pageSize,
			@RequestParam("sortParam") String sortParam, @RequestParam("sortType") String sortType, String nomeFilter,
			String classeFilter, String movFilter) {
		System.out.println("aa" + nomeFilter + " " + classeFilter + "" + movFilter);
		return heroiService.getAllHeroi(page, pageSize, sortParam, sortType, nomeFilter, classeFilter, movFilter);
	}

	// Get um heroi
	@GetMapping(path = "/herois/{id}")
	public ResponseEntity<Heroi> getOneHeroi(@PathVariable Long id) {
		return ResponseEntity.of(this.heroiService.getOneHeroi(id));
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
<<<<<<< HEAD
		
		//resgatar jogos de determinado herois
		@GetMapping(path= "/herois-jogos/{id}")
		public List<Jogo> getJogos(@PathVariable Long id){
			Optional<Heroi> heroi = this.heroiService.getOneHeroi(id);
			
			return heroi.get().getJogos();
		}
=======

		return ResponseEntity.ok().build();
	}
>>>>>>> cb7e3f4856634a522f68823fb96cefca6144855b
}
