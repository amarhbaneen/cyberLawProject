import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIDEngComponent } from './search-ideng.component';

describe('SearchIDEngComponent', () => {
  let component: SearchIDEngComponent;
  let fixture: ComponentFixture<SearchIDEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchIDEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchIDEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
