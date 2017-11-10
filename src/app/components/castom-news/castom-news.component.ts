import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-castom-news',
  template: `   
  <div class="container">
   <form [formGroup]="textForm" (ngSubmit)="submit($event)">
    <div class="form-group row align-items-center find">
        <label  class="label" for="title">Title of news</label>
        <input 
          formControlName="title"
          id="title"
          type="text"
          class="form-control"> 
      <div class="alert alert-danger" *ngIf="(title.touched && title.invalid) || (submitting && !title.dirty)">
        <div *ngIf="title.errors.required">field can't be empty</div>
        <div *ngIf="title.errors.minlength">min 3 simbols</div>
        <div *ngIf="title.errors.maxlength">max 100 simbols</div>
      </div>
      <div>
      <label  class="label" for="text">Text of news</label>     
      </div>
      <textarea   formControlName="text" id="text"
        type="text"
        class="form-control"></textarea>    
        <div class="alert alert-danger" *ngIf="(text.touched && text.invalid) || (submitting && !text.dirty)">
        <div *ngIf="text.errors.required">field can't be empty</div>
        <div *ngIf="text.errors.minlength">min 20 simbols</div>
        <div *ngIf="text.errors.maxlength">max 100 simbols</div>
      </div>
    </div>
      <button   type="submit" class="btn btn-secondary button"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Add news</button>
    </form>
  </div>
`,
  styleUrls: ['./castom-news.component.css']
})
export class CastomNewsComponent implements OnInit {
  castomArticles = [];
  article: any = {};
  titleArticle = null;
  textArticle = null;
  textForm = new FormGroup({
    title: new FormControl('', [
      Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    text: new FormControl('', [
      Validators.required, Validators.minLength(20), Validators.maxLength(1000)])
  });
  submitting = false;
  constructor(private router: Router) {
  }
  submit(event: Event) {
    event.preventDefault();
    if (this.textForm.invalid) {
      this.submitting = true;
      return false;
    }
    this.article.titleArticle = this.textForm.value.title;
    this.article.textArticle = this.textForm.value.text;
    this.article.date = new Date();
    this.castomArticles = localStorage.castomArticles ? JSON.parse(localStorage.castomArticles) : [];
    this.castomArticles.unshift(this.article);
    localStorage.castomArticles = JSON.stringify(this.castomArticles);
    this.router.navigate(
      ['ViewCastomNews']);
  }
  get text() {
    return this.textForm.get("text");
  }
  get title() {
    return this.textForm.get("title");
  }
  ngOnInit() {
  }
}