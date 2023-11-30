import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfExamsComponent } from './prof-exams.component';

describe('ProfExamsComponent', () => {
  let component: ProfExamsComponent;
  let fixture: ComponentFixture<ProfExamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfExamsComponent]
    });
    fixture = TestBed.createComponent(ProfExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
