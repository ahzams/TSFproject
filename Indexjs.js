const nbar = document.querySelector('#nbar');
const fhead = document.querySelector('.fhead');
const ftex = document.querySelector('.ftex');
const btn = document.querySelector('.btn');
const tl = new TimelineMax();

tl.fromTo(nbar,0.6, { top: -70, opacity: 0}, {top: 0, opacity: 1}, 0.2);
tl.fromTo(fhead,0.6, { y: -30, opacity: 0}, {y: 0, opacity: 1});
tl.fromTo(ftex,0.6, { y: 30, opacity: 0}, {y: 0, opacity: 1});
tl.fromTo(btn,0.1, { top: 30, opacity: 0}, {top: 0, opacity: 0.8});