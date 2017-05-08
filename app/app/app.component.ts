import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
    `<h1>Hello {{name}}</h1>
<a routerLink="/hero-list" routerLinkActive="active">Heroes</a>
     <router-outlet></router-outlet>
`,
})
export class AppComponent  { name = 'Dawg'; }
