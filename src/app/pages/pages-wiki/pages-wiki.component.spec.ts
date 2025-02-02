import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesWikiComponent } from './pages-wiki.component';

describe('PagesWikiComponent', () => {
  let component: PagesWikiComponent;
  let fixture: ComponentFixture<PagesWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesWikiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
