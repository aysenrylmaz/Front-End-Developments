import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassdescripComponent } from './classdescrip.component';

describe('ClassdescripComponent', () => {
  let component: ClassdescripComponent;
  let fixture: ComponentFixture<ClassdescripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassdescripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassdescripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
