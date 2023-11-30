import { TestBed } from '@angular/core/testing';

import { AdminProfServiceService } from './admin-prof-service.service';

describe('AdminProfServiceService', () => {
  let service: AdminProfServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminProfServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
