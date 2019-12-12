import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPeakSalesComponent } from './card-peak-sales.component';

describe('CardPeakSalesComponent', () => {
  let component: CardPeakSalesComponent;
  let fixture: ComponentFixture<CardPeakSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPeakSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPeakSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
