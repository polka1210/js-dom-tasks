// BEGIN
export default function solution(url) {
  const browser = navigator.userAgent;
  const space = ' ';
  const result = browser + space + url;
  
  window.location.href = url;
  
  return result;
}
// END