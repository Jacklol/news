import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCastomNewsComponent } from './view-castom-news.component';

describe('ViewCastomNewsComponent', () => {
  let component: ViewCastomNewsComponent;
  let fixture: ComponentFixture<ViewCastomNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCastomNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCastomNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
