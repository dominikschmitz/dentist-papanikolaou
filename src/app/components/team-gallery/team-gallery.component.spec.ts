import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamGallery } from './team-gallery.component';

describe('TeamGalleryComponent', () => {
  let component: TeamGallery;
  let fixture: ComponentFixture<TeamGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
