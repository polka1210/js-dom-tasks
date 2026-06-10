import escapeHtml from 'escape-html';

// BEGIN
export default function run() {
  const btn = document.getElementById('alert-generator');
  const box = document.querySelector('.alerts');
  let num = 0;
  
  if (btn) {
    btn.onclick = function() {
      num = num + 1;
      const a = document.createElement('div');
      a.className = 'alert alert-primary';
      a.innerText = 'Alert ' + num;
      if (box) {
        box.prepend(a);
      }
    };
  }
}
// END