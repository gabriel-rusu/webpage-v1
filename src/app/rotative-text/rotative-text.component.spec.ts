import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotativeTextComponent } from './rotative-text.component';

describe('RotativeTextComponent', () => {
  let component: RotativeTextComponent;
  let fixture: ComponentFixture<RotativeTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotativeTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotativeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
