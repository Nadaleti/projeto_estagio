import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiJogadorListComponent } from './heroi-jogador-list.component';

describe('HeroiJogadorListComponent', () => {
  let component: HeroiJogadorListComponent;
  let fixture: ComponentFixture<HeroiJogadorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroiJogadorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroiJogadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
