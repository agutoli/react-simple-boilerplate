import { configure } from '@kadira/storybook';

const requires = require.context('../', true, /storybook\.js$/);

const loadStories = () => requires.keys().forEach(requires);

configure(loadStories, module);
