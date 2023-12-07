import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockCorrectionalFaciltyComponent } from './mock-correctional-facilty.component';

describe('MockCorrectionalFaciltyComponent', () => {
  let component: MockCorrectionalFaciltyComponent;
  let fixture: ComponentFixture<MockCorrectionalFaciltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockCorrectionalFaciltyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockCorrectionalFaciltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
