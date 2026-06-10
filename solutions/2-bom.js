// BEGIN
export default function solution(url) {
  let browser = navigator.userAgent;
  
  let spaceIndex = browser.indexOf(' ');
  if (spaceIndex !== -1) {
    browser = browser.substring(0, spaceIndex);
  }
  
  window.location.href = url;
  
  return browser + ' ' + url;
}
// END