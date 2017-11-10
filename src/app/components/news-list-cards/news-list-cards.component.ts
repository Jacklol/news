import { Component, OnInit, Input, EventEmitter, } from '@angular/core';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-news-list-cards',
  template: `
 <div  class="container">
  <div  class="cardx row align-items-center" >
    <div  class="col-12 col-sm-6 col-md-4 cardOfNews" style="border: 2px solid black" *ngFor="let article of articles" >
    <div>{{article.title}}</div>
    <div>by {{article.sourcs}}</div>
    <a (click)='viewNews(article)' [routerLink]="['news',article.title]"
    >
    <img src={{article.urlToImage}} alt="not exist"  width="100%"/>
    </a>
    <div>author: {{article.author}}</div>
    <div>{{article.publishedAt |date: 'dd/MM/yyyy HH:mm'}}</div>
     <a (click)='viewNews(article)' [routerLink]="['news',article.title]">read more</a>
    </div>
  </div>
 </div>
 
  `, providers: [HttpService],
  styleUrls: ['./news-list-cards.component.css']
})
export class NewsListCardsComponent implements OnInit {
  @Input() eventEmitter: EventEmitter<any>;
  @Input() articles: any;
  constructor(private httpService: HttpService, ) { }
  viewNews(article) {
    localStorage.article = JSON.stringify(article);
  }
  ngOnInit() {
  }
}
