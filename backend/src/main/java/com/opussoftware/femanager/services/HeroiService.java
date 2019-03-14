package com.opussoftware.femanager.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.opussoftware.femanager.entities.Heroi;
import com.opussoftware.femanager.models.HeroiModel;
import com.opussoftware.femanager.repositories.HeroiRepository;

@Service
public class HeroiService {
	@Autowired
	private HeroiRepository heroiRepository;

	// Get todos herois
	public HeroiModel getAllHeroi(int page, int pageSize, String sortParam, String sortType, String nomeFilter,
			String classeFilter, String movFilter) {

		// define o tipo de ordenação
		Direction x = (sortType.equals("asc")) ? Direction.ASC : Direction.DESC;
		Sort sort = new Sort(x, sortParam);

		// busca
		List<Heroi> herois;
		if (nomeFilter.equals("") && classeFilter.equals("") && movFilter.equals("")) {
			herois = heroiRepository.findAll(sort);

		} else if (classeFilter.equals("") && movFilter.equals("")) {
			herois = heroiRepository.findByNomeContaining("%" + nomeFilter + "%", sort);

		} else if (nomeFilter.equals("") && movFilter.equals("")) {
			herois = heroiRepository.findByClasseContaining("%" + classeFilter + "%", sort);

		} else if (classeFilter.equals("") && nomeFilter.equals("")) {
			herois = heroiRepository.findByMovimentacaoContaining("%" + movFilter + "%", sort);

		} else {
			herois = heroiRepository.findByNomeAndClasseAndMovimentacao("%" + nomeFilter + "%",
					"%" + classeFilter + "%", "%" + movFilter + "%", sort);
		}

		int total = herois.size();
		int from = page * pageSize;
		int to = (from + pageSize > total) ? total : from + pageSize;

		List<Heroi> heroiPage = herois.subList(from, to);

		return new HeroiModel(heroiPage, total);
	}

	// Get um heroi
	public Optional<Heroi> getOneHeroi(Long id) {
		return this.heroiRepository.findById(id);
	}

	// criar novo heroi
	public Heroi saveHeroi(Heroi heroi) {
		return this.heroiRepository.saveAndFlush(heroi);
	}

	// apagar heroi
	public boolean deleteHeroi(Long id) {
		Optional<Heroi> deletable = this.heroiRepository.findById(id);

		if (!deletable.isPresent())
			return false;

		this.heroiRepository.deleteById(id);
		return true;
	}

	// atualizar um heroi
	public Heroi updateHeroi(Heroi heroi, Long id) {
		Optional<Heroi> updatable = this.heroiRepository.findById(id);

		if (!updatable.isPresent())
			return null;

		heroi.setId(id);
		return this.heroiRepository.saveAndFlush(heroi);
	}
}
