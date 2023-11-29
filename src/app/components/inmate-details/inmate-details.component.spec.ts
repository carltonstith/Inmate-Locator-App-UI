import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmateDetailsComponent } from './inmate-details.component';

describe('InmateDetailsComponent', () => {
  let component: InmateDetailsComponent;
  let fixture: ComponentFixture<InmateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmateDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
