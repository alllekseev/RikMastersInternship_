import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneysPaginationComponent } from './journeys-pagination.component';

describe('PaginationComponent', () => {
  let component: JourneysPaginationComponent;
  let fixture: ComponentFixture<JourneysPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneysPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneysPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
