import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewsIndexComponent } from './brews-index.component';

describe('BrewsIndexComponent', () => {
  let component: BrewsIndexComponent;
  let fixture: ComponentFixture<BrewsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrewsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
