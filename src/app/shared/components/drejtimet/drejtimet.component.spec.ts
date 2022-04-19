import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrejtimetComponent } from './drejtimet.component';

describe('DrejtimetComponent', () => {
  let component: DrejtimetComponent;
  let fixture: ComponentFixture<DrejtimetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrejtimetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrejtimetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
