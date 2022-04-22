import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewKursComponent } from './view-kurs.component';

describe('ViewKursComponent', () => {
  let component: ViewKursComponent;
  let fixture: ComponentFixture<ViewKursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewKursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewKursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
