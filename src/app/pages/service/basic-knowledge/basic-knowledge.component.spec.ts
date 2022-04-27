import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicKnowledgeComponent } from './basic-knowledge.component';

describe('BasicKnowledgeComponent', () => {
  let component: BasicKnowledgeComponent;
  let fixture: ComponentFixture<BasicKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicKnowledgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
