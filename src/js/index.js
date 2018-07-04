import '../scss/common.scss';
//import "babel-polyfill";
import print from './print';
const btn = document.createElement('button');

btn.innerText = 'click';
btn.onclick = print;
document.body.appendChild(btn);
