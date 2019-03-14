import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModalHeroiComponent } from './view-modal-heroi.component';

describe('ViewModalHeroiComponent', () => {
  let component: ViewModalHeroiComponent;
  let fixture: ComponentFixture<ViewModalHeroiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewModalHeroiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewModalHeroiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
