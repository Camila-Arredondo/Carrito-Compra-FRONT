import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasComponent } from './ventas.component';
import { HttpClientModule } from '@angular/common/http';

describe('VentasComponent', () => {
  let component: VentasComponent;
  let fixture: ComponentFixture<VentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasComponent ],
      imports : [HttpClientModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
