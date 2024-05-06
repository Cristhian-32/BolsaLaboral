
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { convocatoriaComponent } from './convocatoria.component';



describe('convocatoriaComponent', () => {
  let component: convocatoriaComponent;
  let fixture: ComponentFixture<convocatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ convocatoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(convocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

