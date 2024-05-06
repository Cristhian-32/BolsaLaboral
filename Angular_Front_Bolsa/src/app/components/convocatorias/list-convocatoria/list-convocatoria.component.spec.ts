import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConvocatoriaComponent } from './list-convocatoria.component';

describe('ListConvocatoriaComponent', () => {
  let component: ListConvocatoriaComponent;
  let fixture: ComponentFixture<ListConvocatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConvocatoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListConvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
