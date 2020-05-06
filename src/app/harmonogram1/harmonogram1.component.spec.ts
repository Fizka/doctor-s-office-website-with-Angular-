import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Harmonogram1Component } from './harmonogram1.component';

describe('Harmonogram1Component', () => {
  let component: Harmonogram1Component;
  let fixture: ComponentFixture<Harmonogram1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Harmonogram1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Harmonogram1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
