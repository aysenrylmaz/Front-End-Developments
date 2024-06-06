import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedescripComponent } from './coursedescrip.component';

describe('CoursedescripComponent', () => {
  let component: CoursedescripComponent;
  let fixture: ComponentFixture<CoursedescripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursedescripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursedescripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
