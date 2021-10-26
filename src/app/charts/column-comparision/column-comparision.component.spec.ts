import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnComparisionComponent } from './column-comparision.component';

describe('ColumnComparisionComponent', () => {
  let component: ColumnComparisionComponent;
  let fixture: ComponentFixture<ColumnComparisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnComparisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnComparisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
