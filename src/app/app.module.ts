import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }   from '@angular/http';
import { AppComponent } from './app.component';
import { NewsAppComponent } from './components/news-app/news-app.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { NewsListCardsComponent } from './components/news-list-cards/news-list-cards.component';
import {Routes, RouterModule} from '@angular/router';
import { SavedArticlesComponent } from './components/saved-articles/saved-articles.component';
import { NgAutoCompleteModule} from "ng-auto-complete";
import { CastomNewsComponent } from './components/castom-news/castom-news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewCastomNewsComponent } from './components/view-castom-news/view-castom-news.component';
const appRoutes: Routes =[		
  { path: "", component: NewsAppComponent},
  { path: "SavedArticles", component: SavedArticlesComponent},
  { path: 'news/:newsName', component: NewsCardComponent},
  { path: 'CastomNews', component: CastomNewsComponent},
  { path: 'ViewCastomNews', component: ViewCastomNewsComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    NewsAppComponent,
    NewsListComponent,
    NewsCardComponent,
    NewsListCardsComponent,
    SavedArticlesComponent,
    CastomNewsComponent,
    ViewCastomNewsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgAutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
