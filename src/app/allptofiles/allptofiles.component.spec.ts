import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllptofilesComponent } from './allptofiles.component';

describe('AllptofilesComponent', () => {
  let component: AllptofilesComponent;
  let fixture: ComponentFixture<AllptofilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllptofilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllptofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
