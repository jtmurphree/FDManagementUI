import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveTypeListComponent } from './drive-type-list.component';

describe('DriveTypeListComponent', () => {
  let component: DriveTypeListComponent;
  let fixture: ComponentFixture<DriveTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriveTypeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DriveTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
