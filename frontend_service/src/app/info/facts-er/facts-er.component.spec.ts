import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsErComponent } from './facts-er.component';

describe('FactsErComponent', () => {
  let component: FactsErComponent;
  let fixture: ComponentFixture<FactsErComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactsErComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactsErComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
