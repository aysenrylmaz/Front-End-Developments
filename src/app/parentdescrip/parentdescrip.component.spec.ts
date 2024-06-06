import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentdescripComponent } from './parentdescrip.component';

describe('ParentdescripComponent', () => {
  let component: ParentdescripComponent;
  let fixture: ComponentFixture<ParentdescripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentdescripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentdescripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
