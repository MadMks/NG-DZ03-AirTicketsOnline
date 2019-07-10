import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyChangeComponent } from './currency-change.component';

describe('CurrencyChangeComponent', () => {
  let component: CurrencyChangeComponent;
  let fixture: ComponentFixture<CurrencyChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
