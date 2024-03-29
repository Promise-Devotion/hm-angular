import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaerComponent } from './header.component';

describe('HeaerComponent', () => {
  let component: HeaerComponent;
  let fixture: ComponentFixture<HeaerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
