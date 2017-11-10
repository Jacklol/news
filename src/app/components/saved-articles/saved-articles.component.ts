import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-saved-articles',
  template: `
  <div  class="container">
    <div  class="cardx row align-items-center" >
      <div  class="col-12 col-sm-12 col-md-12 cardOfNews" style="border: 2px solid black" *ngFor="let article of savedArticles" >
      <button type="button" class="btn btn-outline-danger" (click)="delSavedArticle(article)">delSavedArticle</button>
      <div >{{article.title}}</div>
      <div >by {{article.sourcs}}</div>
      <a href={{article.url}} title="">
      <div class="img"   >
      <img src={{article.urlToImage}} alt="not exist"  />
      </div>
      </a>
      <div>{{article.description}}</div>
      <div>author: {{article.author}}</div>
      <div>{{article.publishedAt |date: 'dd/MM/yyyy HH:mm'}}</div>
      <a href={{article.url}} title="">Go to News WebSite: {{article.sourcs}}</a>
    </div>
  </div>
  `,
  styleUrls: ['./saved-articles.component.css']
})
export class SavedArticlesComponent implements OnInit {
  private routeSubscription: Subscription;
  savedArticles;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.savedArticles = localStorage.savedArticles ? JSON.parse(localStorage.savedArticles) : [];
  }
  delSavedArticle(article) {
    var pos = this.savedArticles.indexOf(article);
    this.savedArticles.splice(pos, 1);
    localStorage.savedArticles = JSON.stringify(this.savedArticles);
  }
}
