require('./index.scss');
const $ = require('jquery');
window.$ = $;
window.jQuery = $;
require('jquery-ui');
const _ = require('lodash');
require('./jquery.tags');
// const rand = require('lodash/random');

import registerServiceWorker from '@henderea/static-site-builder/registerServiceWorker';
registerServiceWorker();

