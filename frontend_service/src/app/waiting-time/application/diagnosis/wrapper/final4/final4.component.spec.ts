import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Final4Component } from './final4.component';

describe('Final4Component', () => {
  let component: Final4Component;
  let fixture: ComponentFixture<Final4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Final4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Final4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
