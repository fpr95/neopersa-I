import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWomanComponent } from './home-woman.component';

describe('HomeWomanComponent', () => {
  let component: HomeWomanComponent;
  let fixture: ComponentFixture<HomeWomanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWomanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
