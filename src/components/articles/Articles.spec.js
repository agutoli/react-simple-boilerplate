import React from 'react';
import { shallow } from 'enzyme';

import Articles from './Articles';

describe('<Articles />', () => {
  it('renders <Articles /> component', () => {
    const wrapper = shallow(<Articles />);
    expect(wrapper.find('.articles')).to.have.length(1);
  });
});
