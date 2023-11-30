import { TestBed } from '@angular/core/testing';

import { OualidServiceService } from './oualid-service.service';

describe('OualidServiceService', () => {
  let service: OualidServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OualidServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
