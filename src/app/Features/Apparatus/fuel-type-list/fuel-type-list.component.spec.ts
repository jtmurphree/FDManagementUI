import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelTypeListComponent } from './fuel-type-list.component';

describe('FuelTypeListComponent', () => {
  let component: FuelTypeListComponent;
  let fixture: ComponentFixture<FuelTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuelTypeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuelTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
