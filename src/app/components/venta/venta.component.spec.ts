import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaComponent } from './venta.component';
import { HttpClientModule } from '@angular/common/http';

describe('VentaComponent', () => {
  let component: VentaComponent;
  let fixture: ComponentFixture<VentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaComponent ],
      imports : [HttpClientModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
