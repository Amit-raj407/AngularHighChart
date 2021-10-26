import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablepieComponent } from './variablepie.component';

describe('VariablepieComponent', () => {
  let component: VariablepieComponent;
  let fixture: ComponentFixture<VariablepieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariablepieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablepieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
