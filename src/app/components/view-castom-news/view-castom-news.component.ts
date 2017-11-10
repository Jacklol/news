import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-castom-news',
  template: `
  <div class="container">
    <div class="card" *ngIf="empty">Empty now. Add your castom articles.</div>
    <div class="card" *ngFor="let article of castomArticles">
      <h2> {{article.titleArticle}}</h2>
      <div> {{article.textArticle}}</div>
      <div> {{article.date| date}}</div>
      <button  class="btn btn-outline-danger" (click)="del(article)"> del</button>
    </div>
  </div>

  `,
  styleUrls: ['./view-castom-news.component.css']
})
export class ViewCastomNewsComponent implements OnInit {
  empty: boolean = false;
  castomArticles = [];
  constructor() { }
  ngOnInit() {
    this.castomArticles = localStorage.castomArticles ? JSON.parse(localStorage.castomArticles) : [];
    this.castomArticles.length === 0 ? this.empty = true : this.empty = false;
  }
  del(article) {
    var pos = this.castomArticles.indexOf(article);
    this.castomArticles.splice(pos, 1);
    localStorage.castomArticles = JSON.stringify(this.castomArticles);
  }
}
