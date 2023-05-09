import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStartComponent } from './section-start.component';

describe('SectionStartComponent', () => {
  let component: SectionStartComponent;
  let fixture: ComponentFixture<SectionStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
