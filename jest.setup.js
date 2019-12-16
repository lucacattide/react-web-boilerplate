// Jest - Setup
const {
  JSDOM
} = require('jsdom');
const dom = new JSDOM();

global.fetch = require('jest-fetch-mock');
global.window = dom.window;
global.document = global.window.document;

import {
  configure
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
  adapter: new Adapter()
});
