import { Store } from 'decorators/altDecorators';
import ArticleActions from 'actions/ArticleActions';
import ArticleService from 'business/ArticleService';
import { ArticleEntityCollection } from 'business/ArticleEntity';

@Store
class ArticleStore {
  constructor() {
    this.articles = new ArticleEntityCollection([]);
    this.bindListeners({
      dataLoader: ArticleActions.DATA_LOADER
    });
  }

  dataLoader() {
    ArticleService.fetch().then(articles => this.setState({ articles }));
  }
}

export default ArticleStore;
