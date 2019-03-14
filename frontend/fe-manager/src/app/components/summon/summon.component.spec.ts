import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonComponent } from './summon.component';

describe('SummonComponent', () => {
  let component: SummonComponent;
  let fixture: ComponentFixture<SummonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
