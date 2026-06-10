// BEGIN
const bodyContent = document.body.innerHTML;
const lines = bodyContent.split('\n');
let newContent = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (line !== '') {
    newContent = newContent + '<p>' + line + '</p>';
  }
}

document.body.innerHTML = newContent;
// END