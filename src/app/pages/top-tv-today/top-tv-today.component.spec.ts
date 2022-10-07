import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTvTodayComponent } from './top-tv-today.component';

describe('TopTvTodayComponent', () => {
  let component: TopTvTodayComponent;
  let fixture: ComponentFixture<TopTvTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTvTodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopTvTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
