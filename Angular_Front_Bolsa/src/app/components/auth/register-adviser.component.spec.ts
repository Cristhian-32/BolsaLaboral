import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdviserComponent } from './register-adviser.component';

describe('RegisterAdviserComponent', () => {
  let component: RegisterAdviserComponent;
  let fixture: ComponentFixture<RegisterAdviserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAdviserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAdviserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
