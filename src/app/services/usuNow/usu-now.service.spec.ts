import { TestBed } from '@angular/core/testing';

import { UsuNowService } from './usu-now.service';

describe('UsuNowService', () => {
  let service: UsuNowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuNowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
