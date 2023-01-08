import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSearchEngComponent } from './type-search-eng.component';

describe('TypeSearchEngComponent', () => {
  let component: TypeSearchEngComponent;
  let fixture: ComponentFixture<TypeSearchEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeSearchEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeSearchEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
