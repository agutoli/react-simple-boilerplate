import ArticleStore from 'stores/ArticleStore';
import ArticleActions from 'actions/ArticleActions';
import { StoreContainer } from 'decorators/altDecorators';

import Articles from './Articles';

export default StoreContainer(ArticleStore)(Articles, {
  componentWillMount() {
    ArticleActions.dataLoader();
  }
});
