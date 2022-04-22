import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteKursComponent } from './delete-kurs.component';

describe('DeleteKursComponent', () => {
  let component: DeleteKursComponent;
  let fixture: ComponentFixture<DeleteKursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteKursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteKursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
