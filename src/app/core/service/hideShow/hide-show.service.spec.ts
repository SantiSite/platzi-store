import { TestBed } from '@angular/core/testing';

import { HideShowService } from './hide-show.service';

describe('HideShowService', () => {
  let service: HideShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HideShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
