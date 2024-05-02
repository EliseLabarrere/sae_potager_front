import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsThumbmailComponent } from './tips-thumbmail.component';

describe('TipsThumbmailComponent', () => {
  let component: TipsThumbmailComponent;
  let fixture: ComponentFixture<TipsThumbmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipsThumbmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipsThumbmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
