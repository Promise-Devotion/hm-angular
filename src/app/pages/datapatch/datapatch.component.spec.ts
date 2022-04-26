import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapatchComponent } from './datapatch.component';

describe('DatapatchComponent', () => {
  let component: DatapatchComponent;
  let fixture: ComponentFixture<DatapatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatapatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
