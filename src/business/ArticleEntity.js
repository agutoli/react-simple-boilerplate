import Speck from 'speck-entity';
import { PropTypes } from 'react';

export class ArticleEntity extends Speck {
  static SCHEMA = {
    url: PropTypes.string,
    title: PropTypes.string,
    abstract: PropTypes.string,
    byline: PropTypes.string,
    source: PropTypes.string,
    thumbnail_standard: PropTypes.string,
    subsection: PropTypes.string
  };
}

export class ArticleEntityCollection extends Speck.Collection {
  static TYPE = ArticleEntity;
}
