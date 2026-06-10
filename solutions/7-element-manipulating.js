import camelCase from 'lodash/camelCase';

// BEGIN
export default function normalize(doc) {
  const all = doc.body.getElementsByTagName('*');
  
  for (let i = 0; i < all.length; i++) {
    const element = all[i];
    const classList = element.classList;
    
    const classesToReplace = [];
    
    for (let j = 0; j < classList.length; j++) {
      const oldClass = classList[j];
      const newClass = camelCase(oldClass);
      
      if (oldClass !== newClass) {
        classesToReplace.push({
          old: oldClass,
          new: newClass
        });
      }
    }
    
    for (let k = 0; k < classesToReplace.length; k++) {
      const item = classesToReplace[k];
      classList.replace(item.old, item.new);
    }
  }
}
// END