import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Harmonogram2Component } from './harmonogram2.component';

describe('Harmonogram2Component', () => {
  let component: Harmonogram2Component;
  let fixture: ComponentFixture<Harmonogram2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Harmonogram2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Harmonogram2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
