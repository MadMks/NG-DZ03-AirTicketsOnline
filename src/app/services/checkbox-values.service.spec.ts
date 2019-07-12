import { TestBed } from '@angular/core/testing';

import { CheckboxValuesService } from './checkbox-values.service';

describe('CheckboxValuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckboxValuesService = TestBed.get(CheckboxValuesService);
    expect(service).toBeTruthy();
  });
});
