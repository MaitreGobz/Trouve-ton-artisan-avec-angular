import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityPageComponent } from './accessibility-page.component';

describe('AccessibilityPageComponent', () => {
  let component: AccessibilityPageComponent;
  let fixture: ComponentFixture<AccessibilityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibilityPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessibilityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
