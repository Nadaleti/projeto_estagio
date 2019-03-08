package com.opussoftware.femanager.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.opussoftware.femanager.entities.Heroi;
import com.opussoftware.femanager.repositories.HeroiRepository;

@Service
public class HeroiService {
	@Autowired
	private HeroiRepository heroiRepository;
	
	//Get todos herois
	public List<Heroi> getAllHeroi(){
		Pageable page = PageRequest.of(0, 5, Sort.Direction.ASC,"nome");
		Page<Heroi> herois = this.heroiRepository.findAll(page); 
		
		return herois.getContent();
	}
	
	// Get um heroi
	public Optional<Heroi> getOneHeroi(Long id) {
		return this.heroiRepository.findById(id);
	}

	// Get lista de herois por nome
	public List<Heroi> getHeroiByName(String nome) {
		return this.heroiRepository.findByNomeContaining(nome);
	}
	
	//Get lista de herois por classe
	public List<Heroi> getHeroiByClasse(String nome) {
		return this.heroiRepository.findByClasseContaining(nome);
	}
	
	//Get lista de herois por movimento
	public List<Heroi> getHeroiByMovimentacao(String nome) {
		return this.heroiRepository.findByMovimentacaoContaining(nome);
	}
	
	//criar novo heroi
	public Heroi saveHeroi(Heroi heroi) {
		return this.heroiRepository.saveAndFlush(heroi);
	}
	
	//apagar heroi
	public boolean deleteHeroi(Long id) {
		Optional<Heroi> deletable = this.heroiRepository.findById(id);
		
		if(!deletable.isPresent())
			return false;
		
		this.heroiRepository.deleteById(id);
		return true;
	}
	
	//atualizar um heroi
	public Heroi updateHeroi(Heroi heroi, Long id) {
		Optional<Heroi> updatable = this.heroiRepository.findById(id);
		
		if(!updatable.isPresent())
			return null;
		
		heroi.setId(id);
		return this.heroiRepository.saveAndFlush(heroi);
	}
}
