import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewerySearchFormComponent } from './brewery-search-form.component';

describe('BrewerySearchFormComponent', () => {
  let component: BrewerySearchFormComponent;
  let fixture: ComponentFixture<BrewerySearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrewerySearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewerySearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
