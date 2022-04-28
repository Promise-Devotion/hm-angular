import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifedemoComponent } from './lifedemo.component';

describe('LifedemoComponent', () => {
  let component: LifedemoComponent;
  let fixture: ComponentFixture<LifedemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifedemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
