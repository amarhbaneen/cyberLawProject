import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIDhebComponent } from './search-idheb.component';

describe('SearchIDhebComponent', () => {
  let component: SearchIDhebComponent;
  let fixture: ComponentFixture<SearchIDhebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchIDhebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchIDhebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
