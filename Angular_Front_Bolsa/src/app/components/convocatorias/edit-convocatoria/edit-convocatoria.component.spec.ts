import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConvocatoriaComponent } from './edit-convocatoria.component';

describe('EditConvocatoriaComponent', () => {
  let component: EditConvocatoriaComponent;
  let fixture: ComponentFixture<EditConvocatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConvocatoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditConvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
