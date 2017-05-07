import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './hero-list.component';
import { AppComponent }  from './app.component';

const appRoutes: Routes = [
    { path: 'hero-list', component: HeroListComponent }

];
    
@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, HeroListComponent  ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
