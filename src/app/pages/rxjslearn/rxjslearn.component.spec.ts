import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjslearnComponent } from './rxjslearn.component';

describe('RxjslearnComponent', () => {
  let component: RxjslearnComponent;
  let fixture: ComponentFixture<RxjslearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjslearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjslearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
