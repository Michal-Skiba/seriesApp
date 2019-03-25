import { TestBed } from '@angular/core/testing';

import { GetTabService } from './get-tab.service';

describe('GetTabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTabService = TestBed.get(GetTabService);
    expect(service).toBeTruthy();
  });
});
