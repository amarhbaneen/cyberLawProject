import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcasetableEngComponent } from './allcasetable-eng.component';

describe('AllcasetableEngComponent', () => {
  let component: AllcasetableEngComponent;
  let fixture: ComponentFixture<AllcasetableEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcasetableEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcasetableEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
