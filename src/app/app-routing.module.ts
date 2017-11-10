import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent} from './pages/about/about.component';
import {ArticlesComponent} from './pages/articles/articles.component';

const routes: Routes = [
  {path: '', component: ArticlesComponent, },
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule {}
