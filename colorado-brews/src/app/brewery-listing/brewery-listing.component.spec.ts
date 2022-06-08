import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryListingComponent } from './brewery-listing.component';

describe('BreweryListingComponent', () => {
  let component: BreweryListingComponent;
  let fixture: ComponentFixture<BreweryListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweryListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
