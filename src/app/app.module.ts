import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ArticleComponent} from './pages/article/article.component';
import {AboutComponent} from './pages/about/about.component';

import {SeoService} from './services/seo.service';
import {RoutingModule} from './app-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ArticlesComponent } from './pages/articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AboutComponent,
    NavbarComponent,
    ArticlesComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [SeoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
