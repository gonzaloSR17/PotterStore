import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesWikiBookComponent } from './pages-wiki-book.component';

describe('PagesWikiBookComponent', () => {
  let component: PagesWikiBookComponent;
  let fixture: ComponentFixture<PagesWikiBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesWikiBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesWikiBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
