import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCaseTableComponent } from './all-case-table.component';

describe('AllCaseTableComponent', () => {
  let component: AllCaseTableComponent;
  let fixture: ComponentFixture<AllCaseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCaseTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCaseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
