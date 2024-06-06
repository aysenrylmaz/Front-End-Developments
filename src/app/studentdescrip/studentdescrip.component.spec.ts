import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdescripComponent } from './studentdescrip.component';

describe('StudentdescripComponent', () => {
  let component: StudentdescripComponent;
  let fixture: ComponentFixture<StudentdescripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentdescripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentdescripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
