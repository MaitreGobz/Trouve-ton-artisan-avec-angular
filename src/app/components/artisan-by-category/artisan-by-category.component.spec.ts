import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanByCategoryComponent } from './artisan-by-category.component';

describe('ArtisanByCategoryComponent', () => {
  let component: ArtisanByCategoryComponent;
  let fixture: ComponentFixture<ArtisanByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanByCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisanByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
