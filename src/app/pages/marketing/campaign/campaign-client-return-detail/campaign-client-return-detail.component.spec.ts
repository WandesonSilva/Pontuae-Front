import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReturnDetailComponent } from './campaign-client-return-detail.component';

describe('ClientReturnDetailComponent', () => {
  let component: ClientReturnDetailComponent;
  let fixture: ComponentFixture<ClientReturnDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientReturnDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReturnDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
