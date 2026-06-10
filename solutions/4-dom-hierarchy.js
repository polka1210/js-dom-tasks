// BEGIN
export default function extractData(element) {
  const result = [];
  const children = element.children;
  
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    
    if (child.tagName === 'BODY') {
      const bodyChildren = child.children;
      
      for (let j = 0; j < bodyChildren.length; j++) {
        const p = bodyChildren[j];
        
        if (p.tagName === 'P') {
          const text = p.textContent.trim();
          if (text !== '') {
            result[result.length] = text;
          }
        }
      }
    }
  }
  
  return result;
}
// END