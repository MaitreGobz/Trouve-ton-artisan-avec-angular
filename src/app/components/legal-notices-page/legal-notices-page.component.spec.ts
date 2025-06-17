import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNoticesPageComponent } from './legal-notices-page.component';

describe('LegalNoticesPageComponent', () => {
  let component: LegalNoticesPageComponent;
  let fixture: ComponentFixture<LegalNoticesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalNoticesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalNoticesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
