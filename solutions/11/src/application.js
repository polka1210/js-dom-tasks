import 'whatwg-fetch';

export default () => {
  // BEGIN
 const capitalInput = document.getElementById('capital');
  const countryInput = document.getElementById('country');
  
  const capitalList = document.querySelector('[data-autocomplete-name="capital"]');
  const countryList = document.querySelector('[data-autocomplete-name="country"]');
  
  if (capitalInput && capitalList) {
    capitalInput.oninput = function() {
      const val = this.value;
      if (val === '') {
        capitalList.innerHTML = '<li>Nothing</li>';
        return;
      }
      fetch('/capitals.json?search=' + val)
        .then(function(r) { return r.json(); })
        .then(function(d) {
          capitalList.innerHTML = '';
          if (d.length === 0) {
            capitalList.innerHTML = '<li>Nothing</li>';
          } else {
            for (var i = 0; i < d.length; i++) {
              var li = document.createElement('li');
              li.innerText = d[i];
              capitalList.appendChild(li);
            }
          }
        });
    };
  }
  
  if (countryInput && countryList) {
    countryInput.oninput = function() {
      const val = this.value;
      if (val === '') {
        countryList.innerHTML = '<li>Nothing</li>';
        return;
      }
      fetch('/countries.json?search=' + val)
        .then(function(r) { return r.json(); })
        .then(function(d) {
          countryList.innerHTML = '';
          if (d.length === 0) {
            countryList.innerHTML = '<li>Nothing</li>';
          } else {
            for (var i = 0; i < d.length; i++) {
              var li = document.createElement('li');
              li.innerText = d[i];
              countryList.appendChild(li);
            }
          }
        });
    };
  }
  // END
};
