import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardDeleteComponent } from './award-delete.component';

describe('AwardDeleteComponent', () => {
  let component: AwardDeleteComponent;
  let fixture: ComponentFixture<AwardDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
