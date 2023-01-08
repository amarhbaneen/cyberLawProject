import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseDetailsEngComponent } from './case-details-eng.component';

describe('CaseDetailsEngComponent', () => {
  let component: CaseDetailsEngComponent;
  let fixture: ComponentFixture<CaseDetailsEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseDetailsEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseDetailsEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
