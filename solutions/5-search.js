export default (document) => {
  // BEGIN
 const title = document.querySelector('h1').textContent.trim();
  const description = document.querySelector('.description').textContent.trim();
  
  const itemElements = document.querySelectorAll('.links > div');
  const items = [];
  
  for (let i = 0; i < itemElements.length; i++) {
    const element = itemElements[i];
    const link = element.querySelector('a');
    const articleTitle = link.textContent.trim();
    const articleDesc = element.querySelector('p').textContent.trim();
    
    items[i] = {
      title: articleTitle,
      description: articleDesc
    };
  }
  
  return {
    title: title,
    description: description,
    items: items
  };
  // END
};
