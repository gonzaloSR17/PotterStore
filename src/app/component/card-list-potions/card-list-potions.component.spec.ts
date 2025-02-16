import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListPotionsComponent } from './card-list-potions.component';

describe('CardListPotionsComponent', () => {
  let component: CardListPotionsComponent;
  let fixture: ComponentFixture<CardListPotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardListPotionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListPotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
