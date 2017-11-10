import {Component, OnInit} from '@angular/core';
import {SeoService} from '../../services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private seo: SeoService) {
  }

  ngOnInit() {
    this.seo.generateTags({
      title: 'About page title',
      description: 'About page description',
      image: 'About page image',
    });
  }

}
