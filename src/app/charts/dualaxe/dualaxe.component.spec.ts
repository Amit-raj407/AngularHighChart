import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualaxeComponent } from './dualaxe.component';

describe('DualaxeComponent', () => {
  let component: DualaxeComponent;
  let fixture: ComponentFixture<DualaxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DualaxeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DualaxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
