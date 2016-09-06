import { configure } from '@kadira/storybook';
import '../src/styles/EP.less';

import Iphone5 from './iphones/Iphone5.js';

global.iphone5 = Iphone5;

const requires = require.context('../', true, /storybook\.js$/);

const loadStories = () => requires.keys().forEach(requires);

configure(loadStories, module);
