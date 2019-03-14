import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadorListComponent } from './jogador-list.component';

describe('JogadorListComponent', () => {
  let component: JogadorListComponent;
  let fixture: ComponentFixture<JogadorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogadorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
