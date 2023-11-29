import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmateDetailsModalComponent } from './inmate-details-modal.component';

describe('InmateDetailsModalComponent', () => {
  let component: InmateDetailsModalComponent;
  let fixture: ComponentFixture<InmateDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmateDetailsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmateDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
