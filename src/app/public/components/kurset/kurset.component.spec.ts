import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KursetComponent } from './kurset.component';

describe('KursetComponent', () => {
  let component: KursetComponent;
  let fixture: ComponentFixture<KursetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KursetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KursetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
