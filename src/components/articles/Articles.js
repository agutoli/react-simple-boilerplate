import React from 'react';
import { ArticleEntityCollection } from 'business/ArticleEntity';

import './Articles.scss';

class Articles extends React.Component {
  static propTypes = {
    articles: React.PropTypes.instanceOf(ArticleEntityCollection)
  };

  render() {
    const { articles } = this.props;
    return (
      <div className="articles">
        {articles.items.map((event, index) => (
          <section className="articles__row" key={index}>
            <div className="articles__image">
              <img src={event.thumbnail_standard} />
            </div>
            <div className="articles__text">
              <h6>{event.source}</h6>
              <h2>{event.title}</h2>
              <h3>{event.abstract}</h3>
            </div>
          </section>
        ))}
      </div>
    );
  }
}

export default Articles;
