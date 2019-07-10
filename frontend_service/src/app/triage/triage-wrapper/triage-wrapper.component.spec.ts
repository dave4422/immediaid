import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriageWrapperComponent } from './triage-wrapper.component';

describe('TriageWrapperComponent', () => {
  let component: TriageWrapperComponent;
  let fixture: ComponentFixture<TriageWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriageWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
