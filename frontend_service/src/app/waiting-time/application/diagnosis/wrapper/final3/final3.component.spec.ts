import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Final3Component } from './final3.component';

describe('Final3Component', () => {
  let component: Final3Component;
  let fixture: ComponentFixture<Final3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Final3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Final3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
