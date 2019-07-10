import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurtherComponent } from './further.component';

describe('FurtherComponent', () => {
  let component: FurtherComponent;
  let fixture: ComponentFixture<FurtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
