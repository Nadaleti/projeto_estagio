package com.opussoftware.femanager.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.opussoftware.femanager.services.JogadorService;

@RestController
public class JogadorController {
	
	@Autowired
	private JogadorService jogadorService;
}
