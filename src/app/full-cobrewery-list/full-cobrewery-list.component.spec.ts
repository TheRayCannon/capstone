import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCOBreweryListComponent } from './full-cobrewery-list.component';

describe('FullCOBreweryListComponent', () => {
  let component: FullCOBreweryListComponent;
  let fixture: ComponentFixture<FullCOBreweryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullCOBreweryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCOBreweryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
