import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuwithloginComponent } from './menuwithlogin.component';

describe('MenuwithloginComponent', () => {
  let component: MenuwithloginComponent;
  let fixture: ComponentFixture<MenuwithloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuwithloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuwithloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
