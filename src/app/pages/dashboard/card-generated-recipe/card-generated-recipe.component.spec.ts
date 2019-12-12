import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGeneratedRecipeComponent } from './card-generated-recipe.component';

describe('CardGeneratedRecipeComponent', () => {
  let component: CardGeneratedRecipeComponent;
  let fixture: ComponentFixture<CardGeneratedRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGeneratedRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGeneratedRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
