import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiListComponent } from './heroi-list.component';

describe('HeroiListComponent', () => {
  let component: HeroiListComponent;
  let fixture: ComponentFixture<HeroiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
