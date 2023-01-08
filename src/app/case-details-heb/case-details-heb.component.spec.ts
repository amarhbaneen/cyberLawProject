import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseDetailsHebComponent } from './case-details-heb.component';

describe('CaseDetailsHebComponent', () => {
  let component: CaseDetailsHebComponent;
  let fixture: ComponentFixture<CaseDetailsHebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseDetailsHebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseDetailsHebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
