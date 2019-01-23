import { configure } from '@storybook/react';

window.GLOBAL_CONFIG = {
  REACT_APP_AUTHENTICATION: 'no',
  REACT_APP_API: 'mock',
};

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
