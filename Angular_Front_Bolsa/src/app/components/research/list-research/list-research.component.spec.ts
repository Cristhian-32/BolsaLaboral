import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResearchComponent } from './list-research.component';

describe('ListResearchComponent', () => {
  let component: ListResearchComponent;
  let fixture: ComponentFixture<ListResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListResearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
