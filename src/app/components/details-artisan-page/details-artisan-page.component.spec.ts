import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsArtisanPageComponent } from './details-artisan-page.component';

describe('DetailsArtisanPageComponent', () => {
  let component: DetailsArtisanPageComponent;
  let fixture: ComponentFixture<DetailsArtisanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsArtisanPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsArtisanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
