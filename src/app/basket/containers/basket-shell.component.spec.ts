import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketShellComponent } from './basket-shell.component';

describe('BasketShellComponent', () => {
  let component: BasketShellComponent;
  let fixture: ComponentFixture<BasketShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
