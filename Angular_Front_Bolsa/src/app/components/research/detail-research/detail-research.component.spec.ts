import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailResearchComponent } from './detail-research.component';

describe('DetailResearchComponent', () => {
  let component: DetailResearchComponent;
  let fixture: ComponentFixture<DetailResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailResearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
