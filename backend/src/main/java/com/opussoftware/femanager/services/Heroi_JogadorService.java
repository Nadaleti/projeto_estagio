package com.opussoftware.femanager.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.opussoftware.femanager.repositories.Heroi_JogadorRepository;

@Service
public class Heroi_JogadorService {

	@Autowired
	private Heroi_JogadorRepository heroi_JogadorRepository;
}
