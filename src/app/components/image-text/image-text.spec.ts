import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageText } from './image-text';

describe('ImageText', () => {
  let component: ImageText;
  let fixture: ComponentFixture<ImageText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
