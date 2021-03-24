import { TestBed } from '@angular/core/testing';

import { TortugaService } from './tortuga.service';

describe('TortugaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TortugaService = TestBed.get(TortugaService);
    expect(service).toBeTruthy();
  });
});
