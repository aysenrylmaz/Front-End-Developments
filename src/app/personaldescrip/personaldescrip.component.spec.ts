import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaldescripComponent } from './personaldescrip.component';

describe('PersonaldescripComponent', () => {
  let component: PersonaldescripComponent;
  let fixture: ComponentFixture<PersonaldescripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaldescripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaldescripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
