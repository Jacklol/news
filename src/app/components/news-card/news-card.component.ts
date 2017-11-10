import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-news-card',
  template: ` 
 <div  class="container"> 
    <div  class="card row align-items-center" >
      <div class="button">
        <a class="link" routerLink="" ><button class="btn btn-primary btn-lg btn-block">Back</button></a>
      </div>
    <div class="add" *ngIf="add">article add</div>
        <div>
          <button class="btn btn-outline-success" *ngIf="!add" (click)="saveArticle()"> Save news</button>
    </div>
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
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent {
  private routeSubscription: Subscription;
  name: any;
  add: boolean = false;
  article;
  savedArticles = [];
  constructor(private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe(params => {
      this.name = params['newsName'];
    }); this.init()
  }
  init() {
    this.article = localStorage.article ? JSON.parse(localStorage.article) : [];
  }
  saveArticle() {
    this.add = true;
    this.savedArticles = localStorage.savedArticles ? JSON.parse(localStorage.savedArticles) : [];
    if (this.savedArticles.length == 0) { this.saveLoclSt() }
    this.savedArticles.forEach((item, i, arr) => {
      if (item.title == this.article.title && item.description == this.article.description) { return }
      if (arr.length == i + 1) { this.saveLoclSt(); }
    })
  }
  saveLoclSt() {
    this.savedArticles.push(this.article);
    localStorage.savedArticles = JSON.stringify(this.savedArticles);
  }
}
