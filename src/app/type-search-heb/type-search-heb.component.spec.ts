import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSearchHebComponent } from './type-search-heb.component';

describe('TypeSearchHebComponent', () => {
  let component: TypeSearchHebComponent;
  let fixture: ComponentFixture<TypeSearchHebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeSearchHebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeSearchHebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
