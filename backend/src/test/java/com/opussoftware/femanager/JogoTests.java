package com.opussoftware.femanager;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.opussoftware.femanager.entities.Jogo;
import com.opussoftware.femanager.models.JogoModel;
import com.opussoftware.femanager.services.JogoService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class JogoTests {
	
	public Long id;

	@Autowired
	private JogoService jogoService;
	
	@Before
	public void initialize() {
	}
	
	@Test
	public void getTwoJogos() {
		int page = 0;
		int size = 3;
		
		JogoModel jogos = this.jogoService.getAllJogos(page, size,"");
		
		System.out.println(jogos);
		
		assertEquals(size, jogos.getJogos().size());
	}
	
//	@Test
//	public void insertJogo_getJogo() {
//		Jogo jogo = new Jogo(null, "Comunist Emblem: Brazilian Wars", 2020, "Android", null);
//		Jogo inserted = jogoService.saveJogo(jogo);
//		assertNotNull(inserted);
//		
//		Long id = inserted.getId();
//		
//		assertEquals(jogo.getNome(), this.jogoService.getOneJogo(id).get().getNome());
//		assertEquals(jogo.getId(), this.jogoService.getOneJogo(id).get().getId());
//	}
//
//	@Test
//	public void updateJogo() {
//		String old = this.jogoService.getOneJogo(10L).get().getNome();
//		
//		Jogo jogo = new Jogo(null, "Matheus Emblem: Brazilian Wars", 2020, "Android", null);
//		Jogo new_jogo = this.jogoService.updateJogo(jogo, 10L);
//		
//		assertNotNull(new_jogo);
//		assertNotEquals(old, new_jogo.getNome());
//	}
	
	@Test
	public void updateFailed() {
		Jogo jogo = new Jogo(null, "Capitalist Emblem: Brazilian Wars", 2020, "Android", null);
		assertEquals(null, this.jogoService.updateJogo(jogo, 300L));
	}
	
	@Test
	public void deleteJogo_getJogo() {
		assertTrue(jogoService.deleteJogo(15L));
		
//		assertFalse(this.jogoService.getOneJogo(15L).isPresent());
	}
	
	@Test
	public void jogoNotFound() {
//		assertFalse(this.jogoService.getOneJogo(10000L).isPresent());
	}
	
	@Test
	public void jogoFound() {
//		assertTrue(this.jogoService.getOneJogo(11L).isPresent());
	}

}
