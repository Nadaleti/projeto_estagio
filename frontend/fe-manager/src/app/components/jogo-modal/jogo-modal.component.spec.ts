import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoModalComponent } from './jogo-modal.component';

describe('JogoModalComponent', () => {
  let component: JogoModalComponent;
  let fixture: ComponentFixture<JogoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
