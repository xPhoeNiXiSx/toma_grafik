import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSocialComponent } from './section-social.component';

describe('SectionSocialComponent', () => {
  let component: SectionSocialComponent;
  let fixture: ComponentFixture<SectionSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
