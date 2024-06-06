import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchdescripComponent } from './watchdescrip.component';

describe('WatchdescripComponent', () => {
  let component: WatchdescripComponent;
  let fixture: ComponentFixture<WatchdescripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchdescripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchdescripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
