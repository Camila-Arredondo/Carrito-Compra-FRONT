import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosComponent } from './nosotros.component';
import { HttpClientModule } from '@angular/common/http';

describe('NosotrosComponent', () => {
  let component: NosotrosComponent;
  let fixture: ComponentFixture<NosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosComponent ],
      imports : [HttpClientModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(NosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
