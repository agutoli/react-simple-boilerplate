import { Actions } from 'decorators/altDecorators';

@Actions
class PersonActions {
  constructor() {
    this.generateActions('dataLoader');
  }
}

export default PersonActions;
