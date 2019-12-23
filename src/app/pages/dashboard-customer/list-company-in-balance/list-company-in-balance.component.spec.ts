import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompanyInBalanceComponent } from './list-company-in-balance.component';

describe('ListCompanyInBalanceComponent', () => {
  let component: ListCompanyInBalanceComponent;
  let fixture: ComponentFixture<ListCompanyInBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCompanyInBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompanyInBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
