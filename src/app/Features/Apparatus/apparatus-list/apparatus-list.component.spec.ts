import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparatusListComponent } from './apparatus-list.component';

describe('ApparatusComponent', () => {
  let component: ApparatusListComponent;
  let fixture: ComponentFixture<ApparatusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApparatusListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApparatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
