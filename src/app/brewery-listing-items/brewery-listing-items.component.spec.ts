import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryListingItemsComponent } from './brewery-listing-items.component';

describe('BreweryListingItemsComponent', () => {
  let component: BreweryListingItemsComponent;
  let fixture: ComponentFixture<BreweryListingItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweryListingItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryListingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
