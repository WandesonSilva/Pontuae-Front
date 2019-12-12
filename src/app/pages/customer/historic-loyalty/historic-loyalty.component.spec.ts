import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricLoyaltyComponent } from './historic-loyalty.component';

describe('HistoricLoyaltyComponent', () => {
  let component: HistoricLoyaltyComponent;
  let fixture: ComponentFixture<HistoricLoyaltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricLoyaltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricLoyaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
