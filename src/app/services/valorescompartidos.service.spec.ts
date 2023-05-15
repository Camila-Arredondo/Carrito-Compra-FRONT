import { TestBed } from '@angular/core/testing';

import { ValorescompartidosService } from './valorescompartidos.service';
import { HttpClientModule } from '@angular/common/http';
describe('ValorescompartidosService', () => {
  let service: ValorescompartidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports : [HttpClientModule]
    });
    service = TestBed.inject(ValorescompartidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
