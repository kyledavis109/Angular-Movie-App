import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDayComponent } from './top-day.component';

describe('TopDayComponent', () => {
  let component: TopDayComponent;
  let fixture: ComponentFixture<TopDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
