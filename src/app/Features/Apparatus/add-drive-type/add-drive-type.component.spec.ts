import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDriveTypeComponent } from './add-drive-type.component';

describe('AddDriveTypeComponent', () => {
  let component: AddDriveTypeComponent;
  let fixture: ComponentFixture<AddDriveTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDriveTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDriveTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
