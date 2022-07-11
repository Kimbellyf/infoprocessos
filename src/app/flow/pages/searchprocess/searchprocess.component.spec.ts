import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchprocessComponent } from './searchprocess.component';

describe('SearchprocessComponent', () => {
  let component: SearchprocessComponent;
  let fixture: ComponentFixture<SearchprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchprocessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
