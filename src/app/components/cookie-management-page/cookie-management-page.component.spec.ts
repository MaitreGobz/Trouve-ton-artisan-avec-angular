import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieManagementPageComponent } from './cookie-management-page.component';

describe('CookieManagementPageComponent', () => {
  let component: CookieManagementPageComponent;
  let fixture: ComponentFixture<CookieManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookieManagementPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookieManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
