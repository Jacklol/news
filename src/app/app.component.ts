import { Component,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<div class="container">
  <nav>
  <a routerLink="">  Main  </a>
  <a [routerLink]="['SavedArticles']">  SavedArticles  </a>
  <a [routerLink]="['CastomNews']">  AddCastomNews  </a>
  <a [routerLink]="['ViewCastomNews']">  ViewCastomNews  </a>
</nav>
</div>
<router-outlet></router-outlet>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
