import { TestBed } from '@angular/core/testing';

import { CategoriasService } from './categorias.service';
import { HttpClientModule } from '@angular/common/http';

describe('CategoriasService', () => {
  let service: CategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports : [HttpClientModule]
    });
    service = TestBed.inject(CategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
