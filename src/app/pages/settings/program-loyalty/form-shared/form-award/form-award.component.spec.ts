import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAwardComponent } from './form-award.component';

describe('FormAwardComponent', () => {
  let component: FormAwardComponent;
  let fixture: ComponentFixture<FormAwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
