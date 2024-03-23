import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApparatusComponent } from './add-apparatus.component';

describe('AddApparatusComponent', () => {
  let component: AddApparatusComponent;
  let fixture: ComponentFixture<AddApparatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddApparatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddApparatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
