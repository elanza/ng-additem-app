import { Component, OnInit } from '@angular/core';
import {Article} from '../../classes/article';
import {SeoService} from '../../services/seo.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];

  constructor(private seo: SeoService) {
    this.articles = [
      new Article('Angular 2', 'http://angular.io/1'),
      new Article('Ng 2', 'http://angular.io/2'),
      new Article('NG-2', 'http://angular.io/3'),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  ngOnInit() {
    // Generate SEO Tags for this component
    this.seo.generateTags({
      title: 'Articles Component Title',
      description: 'Articles Component Description',
      image: 'Articles Component image',
    });
  }

}
