import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';
@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }
  getSources(){
    return this.http.get('https://newsapi.org/v1/sources?language=en').
    map((res) => res.json())
  }
  getNews(source){
    var key=environment.newsapi.apiKey;
    var sortBy="top";
    if (source=='the-next-web'){sortBy="latest"}
    return this.http.get('https://newsapi.org/v1/articles?source='+source+'&sortBy='+sortBy+'&apiKey='+key).
    map((res) => res.json())
  }
  
}
