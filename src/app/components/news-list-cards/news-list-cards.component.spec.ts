import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListCardsComponent } from './news-list-cards.component';

describe('NewsListCardsComponent', () => {
  let component: NewsListCardsComponent;
  let fixture: ComponentFixture<NewsListCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsListCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
