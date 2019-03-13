package com.opussoftware.femanager.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.opussoftware.femanager.entities.Jogador;
import com.opussoftware.femanager.repositories.JogadorRepository;

@Service
public class JogadorService {

	@Autowired
	private JogadorRepository jogadorRepository;
	
	public Optional<Jogador> findOne(Long id) {
		return this.jogadorRepository.findById(id);
	}

	public List<Jogador> getAllJogadores() {
		return this.jogadorRepository.findAll();
	}
}
