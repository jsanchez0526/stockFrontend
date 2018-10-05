import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockStockComponent } from './stock-stock.component';

describe('StockStockComponent', () => {
  let component: StockStockComponent;
  let fixture: ComponentFixture<StockStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
