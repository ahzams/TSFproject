const box = document.querySelector('#box');
const heading = document.querySelector('#heading');
const lines = document.querySelector('#lines');
const line2 = document.querySelector('#line2');
const paybtn = document.querySelector('#paybtn');
const tl = new TimelineMax();

tl.fromTo(box,0.8, { height: '0%', opacity: 0}, {height: '80%', opacity: 1, ease: Power2.easeInOut});
tl.fromTo(heading,0.6, { y: -30, opacity: 0}, {y: 0, opacity: 1}, 1.2);
tl.fromTo(lines,0.6, { y: 30, opacity: 0}, {y: 0, opacity: 1}, 1.2);
tl.fromTo(line2,0.6, { y: 30, opacity: 0}, {y: 0, opacity: 1}, 1.2);
tl.fromTo(paybtn,0.1, { top: 30, opacity: 0}, {top: 0, opacity: 1}, 1.2);
 



