import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenStep2Component } from './garden-step2.component';

describe('GardenStep2Component', () => {
  let component: GardenStep2Component;
  let fixture: ComponentFixture<GardenStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GardenStep2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GardenStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
