import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTicketMediumComponent } from './card-ticket-medium.component';

describe('CardTicketMediumComponent', () => {
  let component: CardTicketMediumComponent;
  let fixture: ComponentFixture<CardTicketMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTicketMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTicketMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
