import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Harmonogram3Component } from './harmonogram3.component';

describe('Harmonogram3Component', () => {
  let component: Harmonogram3Component;
  let fixture: ComponentFixture<Harmonogram3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Harmonogram3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Harmonogram3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
