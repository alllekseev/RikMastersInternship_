import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneysFiltrationComponent } from './journeys-filtration.component';

describe('FilterComponent', () => {
  let component: JourneysFiltrationComponent;
  let fixture: ComponentFixture<JourneysFiltrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneysFiltrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneysFiltrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
