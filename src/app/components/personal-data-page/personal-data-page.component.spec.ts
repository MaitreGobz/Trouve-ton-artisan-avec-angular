import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataPageComponent } from './personal-data-page.component';

describe('PersonalDataPageComponent', () => {
  let component: PersonalDataPageComponent;
  let fixture: ComponentFixture<PersonalDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalDataPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
