package com.opussoftware.femanager.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.opussoftware.femanager.entities.Jogo;
import com.opussoftware.femanager.repositories.JogoRepository;

@Service
public class JogoService {
	@Autowired
	private JogoRepository jogoRepository;

	// Get all jogos
	public List<Jogo> getAllJogos() {
		Pageable page_def = PageRequest.of(0, 2);
		Page<Jogo> p = this.jogoRepository.findAll(page_def);

		return p.getContent();
	}

	// Get um jogo
	public Optional<Jogo> getOneJogo(Long id) {
		return this.jogoRepository.findById(id);
	}

	// Get lista de jogos por nome
	public List<Jogo> getJogoByName(String nome) {
		return this.jogoRepository.findByNomeContaining(nome);
	}

	// Criar jogo
	public Jogo saveJogo(Jogo jogo) {
		return this.jogoRepository.saveAndFlush(jogo);
	}

	// Delete jogo
	public boolean deleteJogo(Long id) {
		Optional<Jogo> opt_jogo = this.jogoRepository.findById(id);

		if (!opt_jogo.isPresent()) {
			return false;
		}

		this.jogoRepository.deleteById(id);

		return true;
	}

	// Atualizar jogo
	public Jogo updateJogo(Jogo jogo, Long id) {
		Optional<Jogo> opt_jogo = this.jogoRepository.findById(id);

		if (!opt_jogo.isPresent()) {
			return null;
		}

		jogo.setId(id);
		return this.jogoRepository.saveAndFlush(jogo);
	}
}
