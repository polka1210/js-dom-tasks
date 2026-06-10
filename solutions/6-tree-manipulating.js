// BEGIN
export default function prettify(document) {
  const divs = document.getElementsByTagName('div');
  
  for (let i = 0; i < divs.length; i++) {
    const div = divs[i];
    const children = div.childNodes;
    
    for (let j = 0; j < children.length; j++) {
      const child = children[j];
      
      if (child instanceof Text) {
        const text = child.textContent;
        
        if (text.trim() !== '') {
          const p = document.createElement('p');
          p.textContent = text;
          child.replaceWith(p);
        }
      }
    }
  }
}
// END