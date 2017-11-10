import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-news-list',
  template: `
  <div  class="container">
    <div class="form-group row align-items-center find">
      <div   class="col-sm-6 col-3 mr-auto" class="mainselection">
        <select  #selectElem >
          <option  *ngFor="let source of sources" [value]="source.id" >
            {{source.name}} 
          </option>
        </select>
      </div >
    <div class='col-sm-2 '>
     <button (click)="chooseSource(selectElem.value) " class="btn btn-success">add</button>
    </div>
  </div>
  <div>
    <div class='pickedSource' *ngFor="let pickedSource of pickedSources">
      {{pickedSource.name}}
      <i  (click)="delSource(pickedSource)" class="fa fa-times" aria-hidden="true"></i>
    </div>  
  </div> 
</div>
 
  `, providers: [HttpService],
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  sources = [];
  pickedSources = [];
  curUser = {};
  articles = [];
  constructor(private httpService: HttpService, ) { }
  @Output() onSourcesChanges = new EventEmitter<any>();
  @Output() onArticlesChanges = new EventEmitter<any>();
  @Output() onSourcesAdd = new EventEmitter<any>();
  @Output() onSourcesDel = new EventEmitter<any>();
  ngOnInit() {
    this.getSources();
    this.pickedSources = localStorage.pickedSources ? JSON.parse(localStorage.pickedSources) : [];
    this.onSourcesChanges.emit(this.pickedSources);
    this.getNews(this.pickedSources);
  }
  getSources() {
    this.httpService.getSources().subscribe((data) => {
      this.sources = data.sources;
    })
  }
  chooseSource(selectElem) {
    var newsSource = this.sources.filter(value => value.id === (selectElem))[0];
    if (this.pickedSources.filter(value => value.id === (selectElem)).length > 0) return;
    this.pickedSources.push(newsSource);
    localStorage.pickedSources = JSON.stringify(this.pickedSources);
    this.addNews(newsSource);
  }
  delSource(pickedSource) {
    var pos = this.pickedSources.indexOf(pickedSource);
    this.pickedSources.splice(pos, 1);
    localStorage.pickedSources = JSON.stringify(this.pickedSources);

    this.getNews(this.pickedSources);
  }
  addNews(Sourc) {
    this.httpService.getNews(Sourc.id).subscribe((data) => {
      var articles = data.articles;
      articles.forEach(el => {
        el.sourcs = Sourc.name;
      });
      Array.prototype.push.apply(this.articles, articles);
      this.onArticlesChanges.emit(this.articles);
    })
  }
  getNews(Sourcs) {
    this.articles = [];
    if (Sourcs.length == 0) { this.onArticlesChanges.emit([]) }
    Sourcs.forEach(element => {
      this.httpService.getNews(element.id).subscribe((data) => {
        var articles = data.articles;
        articles.forEach(el => {
          el.sourcs = element.name;
        });
        Array.prototype.push.apply(this.articles, articles);
        this.onArticlesChanges.emit(this.articles);
      })
    });
  }
}
