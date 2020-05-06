import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllharmonogramComponent } from './allharmonogram.component';

describe('AllharmonogramComponent', () => {
  let component: AllharmonogramComponent;
  let fixture: ComponentFixture<AllharmonogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllharmonogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllharmonogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
