import {Injectable} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(private meta: Meta) {}

  generateTags(config) {
    // default values
    config = {
      title: 'initial title',
      description: 'initial description',
      image: 'https://angularfirebase.com/images/logo.png',
      slug: '',
      ...config
    };

    this.meta.updateTag({ name: 'twitter:card', content: 'Site name summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'Site name' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });
    this.meta.updateTag({ property: 'og:type', content: 'Site name Type' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Site name' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:url', content: `${config.slug}` });

    this.meta.updateTag({ property: 'type', content: 'Type property' });
    this.meta.updateTag({ property: 'site_name', content: 'Site name Title' });
    this.meta.updateTag({ property: 'title', content: config.title });
    this.meta.updateTag({ property: 'description', content: config.description });
    this.meta.updateTag({ property: 'image', content: config.image });
    this.meta.updateTag({ property: 'url', content: `${config.slug}` });

  };
}
