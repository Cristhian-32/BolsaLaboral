import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConvocatoriaComponent } from './add-convocatoria.component';

describe('AddConvocatoriaComponent', () => {
  let component: AddConvocatoriaComponent;
  let fixture: ComponentFixture<AddConvocatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConvocatoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddConvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
