package com.opussoftware.femanager;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.opussoftware.femanager.entities.Heroi;
import com.opussoftware.femanager.services.HeroiService;

public class HeroisTests {

	@Autowired
	private HeroiService heroiService;
	
	@Before
	public void init() {}
	
	@Test
	public void getHeroesPage() {
		List<Heroi> herois =  heroiService.getAllHeroi();
		
		assertEquals(5, herois.size());
	}
}
