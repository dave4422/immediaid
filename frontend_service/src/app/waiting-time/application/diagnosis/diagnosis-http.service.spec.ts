import { TestBed } from '@angular/core/testing';

import { DiagnosisHTTPService } from './diagnosis-http.service';

describe('DiagnosisHTTPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiagnosisHTTPService = TestBed.get(DiagnosisHTTPService);
    expect(service).toBeTruthy();
  });
});
