import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCocktailsComponent } from './page-cocktails.component';

describe('PageCocktailsComponent', () => {
  let component: PageCocktailsComponent;
  let fixture: ComponentFixture<PageCocktailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCocktailsComponent]
    });
    fixture = TestBed.createComponent(PageCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
