import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLatestNewsComponent } from './main-latest-news.component';

describe('MainLatestNewsComponent', () => {
  let component: MainLatestNewsComponent;
  let fixture: ComponentFixture<MainLatestNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainLatestNewsComponent]
    });
    fixture = TestBed.createComponent(MainLatestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
