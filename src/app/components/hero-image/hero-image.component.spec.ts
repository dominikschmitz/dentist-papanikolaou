import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroImage } from './hero-image.component';

describe('HeroImageComponent', () => {
  let component: HeroImage;
  let fixture: ComponentFixture<HeroImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
