import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionPersonal } from './atencion-personal';

describe('AtencionPersonal', () => {
  let component: AtencionPersonal;
  let fixture: ComponentFixture<AtencionPersonal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtencionPersonal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtencionPersonal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
