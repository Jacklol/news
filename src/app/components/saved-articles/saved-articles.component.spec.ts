import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavesArticlesComponent } from './saves-articles.component';

describe('SavesArticlesComponent', () => {
  let component: SavesArticlesComponent;
  let fixture: ComponentFixture<SavesArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavesArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavesArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
