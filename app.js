import Page from './js/components/page.js';
import EventEmitter from './js/services/event-emitter.js';

const eventEmitter = new EventEmitter();
let currentPage = new Page({
    element: document.querySelector('[data-app]'),
    eventEmitter,
});
