import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadorModalComponent } from './jogador-modal.component';

describe('JogadorModalComponent', () => {
  let component: JogadorModalComponent;
  let fixture: ComponentFixture<JogadorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogadorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogadorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
