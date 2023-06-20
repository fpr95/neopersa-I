import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeManComponent } from './home-man.component';

describe('HomeManComponent', () => {
  let component: HomeManComponent;
  let fixture: ComponentFixture<HomeManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeManComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
