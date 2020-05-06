import { TestBed } from '@angular/core/testing';

import { WizytaService } from './wizyta.service';

describe('WizytaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WizytaService = TestBed.get(WizytaService);
    expect(service).toBeTruthy();
  });
});
