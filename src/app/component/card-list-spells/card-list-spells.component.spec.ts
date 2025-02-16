import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListSpellsComponent } from './card-list-spells.component';

describe('CardListSpellsComponent', () => {
  let component: CardListSpellsComponent;
  let fixture: ComponentFixture<CardListSpellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardListSpellsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
