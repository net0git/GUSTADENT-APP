import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Locacion } from './locacion';

describe('Locacion', () => {
  let component: Locacion;
  let fixture: ComponentFixture<Locacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Locacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Locacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
