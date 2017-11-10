import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'news-app',
  template: `
  <app-news-list (onArticlesChanges)="onArticlesChanges($event)"></app-news-list>
  <app-news-list-cards  [eventEmitter]="eventEmitter" [articles]="articles"></app-news-list-cards>
  `,
  styleUrls: ['./news-app.component.css']
})
export class NewsAppComponent {
  eventEmitter = new EventEmitter<string>();
  pickedSources = [];
  articles = [];
  title = 'app';
  onArticlesChanges(onArticlesChanges) {
    this.articles = onArticlesChanges;
    this.articles.sort(function (a, b) {
      if (a.publishedAt < b.publishedAt) {
        return 1;
      }
      if (a.publishedAt > b.publishedAt) {
        return -1;
      }
      return 0;
    });
  }

}
