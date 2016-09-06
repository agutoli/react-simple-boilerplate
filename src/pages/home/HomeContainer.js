import PersonStore from 'stores/PersonStore';
// import PersonActions from 'actions/PersonActions';

import { StoreContainer } from 'decorators/altDecorators';

import Home from './Home';

export default StoreContainer(PersonStore)(Home);
