import fs from 'fs';
import { JSDOM } from 'jsdom';

// Read a view from file
const view = fs.readFileSync('src/reservations.html', 'utf8');

// Parse the view to a DOM and export its root
global.document = (new JSDOM(view)).window.document;

// Load UI library
const ko = require('knockout');

export default ko;
