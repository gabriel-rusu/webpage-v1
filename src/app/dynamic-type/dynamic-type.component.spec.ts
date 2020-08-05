import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTypeComponent } from './dynamic-type.component';

describe('DynamicTypeComponent', () => {
  let component: DynamicTypeComponent;
  let fixture: ComponentFixture<DynamicTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
