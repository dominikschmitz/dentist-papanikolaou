import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickContactHeader } from './quick-contact-header';

describe('QuickContactHeader', () => {
  let component: QuickContactHeader;
  let fixture: ComponentFixture<QuickContactHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickContactHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickContactHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
