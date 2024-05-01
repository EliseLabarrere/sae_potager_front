import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGardenComponent } from './select-garden.component';

describe('SelectGardenComponent', () => {
  let component: SelectGardenComponent;
  let fixture: ComponentFixture<SelectGardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectGardenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
