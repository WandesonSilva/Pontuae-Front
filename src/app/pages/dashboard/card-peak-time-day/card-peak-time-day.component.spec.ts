import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPeakTimeDayComponent } from './card-peak-time-day.component';

describe('CardPeakTimeDayComponent', () => {
  let component: CardPeakTimeDayComponent;
  let fixture: ComponentFixture<CardPeakTimeDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPeakTimeDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPeakTimeDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
