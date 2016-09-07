import ArticleActions from 'actions/ArticleActions';
import ArticleService from 'business/ArticleService';

import { Store } from 'decorators/altDecorators';
import { ArticleEntityCollection } from 'business/ArticleEntity';

@Store(ArticleActions)
class ArticleStore {

  articles = new ArticleEntityCollection([]);

  dataLoader() {
    ArticleService.fetch().then(articles => {
      this.setState({ articles: new ArticleEntityCollection(articles) });
    });
  }
}

export default ArticleStore;
