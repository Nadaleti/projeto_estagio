package com.opussoftware.femanager.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.opussoftware.femanager.services.Heroi_JogadorService;

@RestController
public class Heroi_JogadorController {
	
	@Autowired
	private Heroi_JogadorService heroi_JogadorService;
}
