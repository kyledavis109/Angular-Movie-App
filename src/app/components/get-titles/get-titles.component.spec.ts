import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTitlesComponent } from './get-titles.component';

describe('GetTitlesComponent', () => {
  let component: GetTitlesComponent;
  let fixture: ComponentFixture<GetTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTitlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
