import 'whatwg-fetch';

export default () => {
  // BEGIN
const inputs = document.querySelectorAll('[data-autocomplete]');
  
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const url = input.getAttribute('data-autocomplete');
    const name = input.getAttribute('data-autocomplete-name');
    const list = document.querySelector('[data-autocomplete-name="' + name + '"]');
    
    if (!list) continue;
    
    input.addEventListener('input', async function(e) {
      const value = e.target.value;
      
      if (value === '') {
        list.innerHTML = '<li>Nothing</li>';
        return;
      }
      
      const fullUrl = window.location.origin + url + '?search=' + encodeURIComponent(value);
      
      try {
        const response = await fetch(fullUrl);
        const data = await response.json();
        
        list.innerHTML = '';
        
        if (data.length === 0) {
          list.innerHTML = '<li>Nothing</li>';
        } else {
          for (let j = 0; j < data.length; j++) {
            const li = document.createElement('li');
            li.textContent = data[j];
            list.appendChild(li);
          }
        }
      } catch (error) {
        list.innerHTML = '<li>Nothing</li>';
      }
    });
  }
  // END
};
