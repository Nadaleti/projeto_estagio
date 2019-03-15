package com.opussoftware.femanager.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.opussoftware.femanager.entities.Jogo;
import com.opussoftware.femanager.entities.Jogador;
import com.opussoftware.femanager.models.JogadorHeroiModel;
import com.opussoftware.femanager.models.JogadorModel;
import com.opussoftware.femanager.models.JogoModel;
import com.opussoftware.femanager.repositories.JogadorRepository;

@Service
public class JogadorService {

	@Autowired
	private JogadorRepository jogadorRepository;

	public List<Jogador> getAllJogadores() {
		return this.jogadorRepository.findAll();
	}
	
	public JogadorModel getAllJogadores(int page, int size, String filter) {
		List<Jogador> jogadores = filter.isEmpty() ? this.jogadorRepository.findAll()
				: this.jogadorRepository.findByNomeContaining(filter.toLowerCase());
		int total = jogadores.size();
		
		int from = (page * size);
		int to = (from + size) > total ? total : (from + size);
		
		if (total > 0) {
			List<Jogador> jogadorPage = jogadores.subList(from, to);
			return new JogadorModel(jogadorPage, total);
		} else {
			return new JogadorModel(new ArrayList<Jogador>(), total);
		}
	}

	public Jogador updateJogador(Jogador jogador, Long id) {
		Optional<Jogador> j = this.jogadorRepository.findById(id);
		
		if (!j.isPresent()) {
			return null;
		}
		
		jogador.setId(id);
		jogador.setNum_herois(j.get().getNum_herois());
		jogador.setMax_herois(j.get().getMax_herois());
		return this.jogadorRepository.saveAndFlush(jogador);
	}
	
	public boolean deleteJogador (Long id) {
		Optional<Jogador> j = this.jogadorRepository.findById(id);
		
		if (!j.isPresent()) {
			return false;
		}
		
		this.jogadorRepository.deleteById(id);
		
		return true;
	}
	
	public JogadorHeroiModel getOneJogador(Long id) {
		Optional<Jogador> j = this.jogadorRepository.findById(id);
		
		if (!j.isPresent()) {
			return null;
		}
		
		return new JogadorHeroiModel(j.get(), j.get().getHerois(), 0);
	}
	
	public Optional<Jogador> findOne(Long id) {
		return this.jogadorRepository.findById(id);
	}
}
