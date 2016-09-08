## Instalation

`npm install`

## Running

`npm start`

## Flux/Alt example

### Actions

```javascript
import { Actions } from 'decorators/altDecorators';

@Actions
class ArticleActions {
  constructor() {
    this.generateActions('dataLoader');
  }
}

export default ArticleActions;
```


### Store

```javascript
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
```

### Connect your stores with components

```javascript
import ArticleStore from 'stores/ArticleStore';
import ArticleActions from 'actions/ArticleActions';
import { StoreContainer } from 'decorators/altDecorators';

import Articles from './Articles';

export default StoreContainer(ArticleStore)(Articles, {
  componentWillMount() {
    ArticleActions.dataLoader();
  }
});
```
