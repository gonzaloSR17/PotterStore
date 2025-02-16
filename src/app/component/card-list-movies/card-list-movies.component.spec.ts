import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListMoviesComponent } from './card-list-movies.component';

describe('CardListMoviesComponent', () => {
  let component: CardListMoviesComponent;
  let fixture: ComponentFixture<CardListMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardListMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
