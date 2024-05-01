import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsAdvicesComponent } from './tips-advices.component';

describe('TipsAdvicesComponent', () => {
  let component: TipsAdvicesComponent;
  let fixture: ComponentFixture<TipsAdvicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipsAdvicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipsAdvicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
