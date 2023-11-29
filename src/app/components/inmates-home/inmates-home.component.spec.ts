import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmatesHomeComponent } from './inmates-home.component';

describe('InmatesHomeComponent', () => {
  let component: InmatesHomeComponent;
  let fixture: ComponentFixture<InmatesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmatesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmatesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
