import { TestBed } from '@angular/core/testing';

import { CheckBoxService } from './check-box.service';

describe('CheckBoxService', () => {
  let service: CheckBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
