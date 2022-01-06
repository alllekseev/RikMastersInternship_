import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneysHistoryComponent } from './journeys-history.component';

describe('MainHistoryComponent', () => {
  let component: JourneysHistoryComponent;
  let fixture: ComponentFixture<JourneysHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneysHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneysHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
