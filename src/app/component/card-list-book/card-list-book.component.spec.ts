import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListBookComponent } from './card-list-book.component';

describe('CardListBookComponent', () => {
  let component: CardListBookComponent;
  let fixture: ComponentFixture<CardListBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardListBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
