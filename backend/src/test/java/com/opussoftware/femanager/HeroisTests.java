package com.opussoftware.femanager;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.opussoftware.femanager.services.HeroiService;

public class HeroisTests {

	@Autowired
	private HeroiService heroiService;
	
	@Before
	public void init() {}
	
	@Test
	public void heroi() {
		assertEquals(5, this.heroiService.getAllHeroi(5, 5).getHerois().size() );
	}

}
