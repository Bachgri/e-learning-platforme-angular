import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfesseurComponent } from './admin-professeur.component';

describe('AdminProfesseurComponent', () => {
  let component: AdminProfesseurComponent;
  let fixture: ComponentFixture<AdminProfesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProfesseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
