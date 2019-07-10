import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Final2Component } from './final2.component';

describe('Final2Component', () => {
  let component: Final2Component;
  let fixture: ComponentFixture<Final2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Final2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Final2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
