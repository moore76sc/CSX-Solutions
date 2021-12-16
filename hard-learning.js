/* var iframe  = document.createElement('iframe');
iframe.src  = chrome.runtime.getURL('index.html');
document.body.appendChild(iframe);
 */



/*   $.get(chrome.runtime.getURL('index.html'), function(data) {
console.log('is chrome getting data?');
  $(data).appendTo('body');
}) */

/* fetch(chrome.runtime.getURL('/index.html')).then(r => r.text()).then(html => {
  document.body.insertAdjacentHTML('beforeend', 'body');
  // not using innerHTML as it would break js event listeners of the page
  console.log('success!!')
});
   */
/* document.addEventListener('load', (event) => {
console.log('DOM IS LOADED!!!!!')
}) */
/* document.addEventListener('readystatechange', () => {
console.log('ding')
}) */

setTimeout(() => {
var iFrame  = document.createElement("iframe");
iFrame.setAttribute("id", "iframee");
iFrame.setAttribute("scrolling", "no");
iFrame.setAttribute("border-width", "none")
iFrame.setAttribute("border-style", "none")
iFrame.setAttribute("width", "450px")
iFrame.setAttribute("height", "400px")
iFrame.src  = chrome.extension.getURL ("index.html");
const footerElem = document.querySelector(".challenge-test")
footerElem.insertBefore(iFrame, footerElem.childNodes[1]);
}, 5000);


/* document.addEventListener('DOMContentLoaded', () => {
console.log('DOM IS LOADED!!!!!')
}) */

// function insertBefore(newNode, existingNode) {
//   existingNode.parentNode.insertBefore(newNode, existingNode);
// }
// insertBefore(iFrame, )