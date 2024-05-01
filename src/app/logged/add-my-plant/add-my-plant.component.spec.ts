import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMyPlantComponent } from './add-my-plant.component';

describe('AddMyPlantComponent', () => {
  let component: AddMyPlantComponent;
  let fixture: ComponentFixture<AddMyPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMyPlantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMyPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
