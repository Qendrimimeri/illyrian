import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegjisterComponent } from './regjister.component';

describe('RegjisterComponent', () => {
  let component: RegjisterComponent;
  let fixture: ComponentFixture<RegjisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegjisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegjisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
