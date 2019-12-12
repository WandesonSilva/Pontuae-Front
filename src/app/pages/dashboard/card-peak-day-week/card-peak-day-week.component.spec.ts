import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPeakDayWeekComponent } from './card-peak-day-week.component';

describe('CardPeakDayWeekComponent', () => {
  let component: CardPeakDayWeekComponent;
  let fixture: ComponentFixture<CardPeakDayWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPeakDayWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPeakDayWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
