import { TestBed } from '@angular/core/testing';

import { HeroiJogadorService } from './heroi-jogador.service';

describe('HeroiJogadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroiJogadorService = TestBed.get(HeroiJogadorService);
    expect(service).toBeTruthy();
  });
});
