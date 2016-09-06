import { Actions } from 'decorators/altDecorators';

@Actions
class ArticleActions {
  constructor() {
    this.generateActions('dataLoader');
  }
}

export default ArticleActions;
