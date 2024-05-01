import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenStep1Component } from './garden-step1.component';

describe('GardenStep1Component', () => {
  let component: GardenStep1Component;
  let fixture: ComponentFixture<GardenStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GardenStep1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GardenStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
