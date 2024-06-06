import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservlistComponent } from './reservlist.component';

describe('ReservlistComponent', () => {
  let component: ReservlistComponent;
  let fixture: ComponentFixture<ReservlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
