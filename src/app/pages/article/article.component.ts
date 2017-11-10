import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Article} from '../../classes/article';
import {SeoService} from '../../services/seo.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor(private seo: SeoService) {
    // article is populated by the Input now,
    // so we don't need anything here
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
    // Generate SEO Tags for this component
    this.seo.generateTags({
      title: 'Article title',
      description: 'Article Description',
      image: 'Article image',
    });
  }

}
