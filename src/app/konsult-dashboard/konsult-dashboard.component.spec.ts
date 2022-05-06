import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonsultDashboardComponent } from './konsult-dashboard.component';

describe('KonsultDashboardComponent', () => {
  let component: KonsultDashboardComponent;
  let fixture: ComponentFixture<KonsultDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonsultDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonsultDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
