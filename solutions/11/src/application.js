import 'whatwg-fetch';

export default () => {
  // BEGIN
  const inputs = document.querySelectorAll('[data-autocomplete]');
  
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const url = input.getAttribute('data-autocomplete');
    const name = input.getAttribute('data-autocomplete-name');
    const list = document.querySelector(`[data-autocomplete-name="${name}"]`);
    
    input.addEventListener('input', function() {
      const query = this.value;
      
      if (query.length === 0) {
        if (list) {
          list.innerHTML = '<li>Nothing</li>';
        }
        return;
      }
      
      fetch(url + '?search=' + encodeURIComponent(query))
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          if (list) {
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
          }
        })
        .catch(function() {
          if (list) {
            list.innerHTML = '<li>Nothing</li>';
          }
        });
    });
  }
  // END
};
