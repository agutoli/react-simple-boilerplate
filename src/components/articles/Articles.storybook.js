import React from 'react';
import faker from 'faker';
import { storiesOf } from '@kadira/storybook';

import { ArticleEntityCollection } from '../../business/ArticleEntity';
import ArticleList from './Articles';


const createArticle = () => ({
  url: faker.internet.url(),
  title: faker.lorem.words(),
  abstract: faker.lorem.paragraph(),
  byline: faker.name.findName(),
  source: 'The New York Times',
  thumbnail_standard: faker.random.image(),
  subsection: faker.lorem.paragraphs()
});

const articles = [createArticle(), createArticle()];

const articlesCollection = new ArticleEntityCollection(articles);

storiesOf('ArticleList', module)
  .add('default', () => (
    <div>
      <ArticleList articles={articlesCollection} />
    </div>
  ));
