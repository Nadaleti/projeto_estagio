import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiModalComponent } from './heroi-modal.component';

describe('HeroiModalComponent', () => {
  let component: HeroiModalComponent;
  let fixture: ComponentFixture<HeroiModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroiModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
