import { TestBed } from '@angular/core/testing';

import { ProductosService } from './productos.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductosService', () => {
  let producto: ProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports : [HttpClientModule]
    });    producto = TestBed.inject(ProductosService);
  });

  it('should be created', () => {
    expect(producto).toBeTruthy();
  });
});
