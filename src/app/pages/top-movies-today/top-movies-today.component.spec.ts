import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMoviesTodayComponent } from './top-movies-today.component';

describe('TopMoviesTodayComponent', () => {
  let component: TopMoviesTodayComponent;
  let fixture: ComponentFixture<TopMoviesTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMoviesTodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMoviesTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
