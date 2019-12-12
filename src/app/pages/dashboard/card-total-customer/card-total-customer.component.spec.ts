import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTotalCustomerComponent } from './card-total-customer.component';

describe('CardTotalCustomerComponent', () => {
  let component: CardTotalCustomerComponent;
  let fixture: ComponentFixture<CardTotalCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTotalCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTotalCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
