import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Further2Component } from './further2.component';

describe('Further2Component', () => {
  let component: Further2Component;
  let fixture: ComponentFixture<Further2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Further2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Further2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
