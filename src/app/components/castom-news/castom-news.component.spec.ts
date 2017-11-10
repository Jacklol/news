import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastomNewsComponent } from './castom-news.component';

describe('CastomNewsComponent', () => {
  let component: CastomNewsComponent;
  let fixture: ComponentFixture<CastomNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastomNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastomNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
