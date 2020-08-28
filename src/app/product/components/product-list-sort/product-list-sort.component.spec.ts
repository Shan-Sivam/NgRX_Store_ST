import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListSortComponent } from './product-list-sort.component';

describe('ProductListSortComponent', () => {
  let component: ProductListSortComponent;
  let fixture: ComponentFixture<ProductListSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
