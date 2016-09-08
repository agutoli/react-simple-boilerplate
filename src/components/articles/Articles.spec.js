import React from 'react';
import { shallow } from 'enzyme';

import Articles from './Articles';

describe('<Articles />', () => {
  it('renders <Articles /> component', () => {
    const articles = {
      items: []
    };
    const wrapper = shallow(<Articles articles={articles} />);
    expect(wrapper.find('.articles')).to.have.length(1);
  });
});
