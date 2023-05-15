import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCreditoComponent } from './tarjeta-credito.component';
import { HttpClientModule } from '@angular/common/http';

describe('TarjetaCreditoComponent', () => {
  let component: TarjetaCreditoComponent;
  let fixture: ComponentFixture<TarjetaCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCreditoComponent ],
      imports : [HttpClientModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});