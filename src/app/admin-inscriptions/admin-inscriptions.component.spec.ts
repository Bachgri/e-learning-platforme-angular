import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInscriptionsComponent } from './admin-inscriptions.component';

describe('AdminInscriptionsComponent', () => {
  let component: AdminInscriptionsComponent;
  let fixture: ComponentFixture<AdminInscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInscriptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
