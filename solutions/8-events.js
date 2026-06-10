export default () => {
  // BEGIN
const button = document.getElementById('alert-generator');
  const container = document.querySelector('.alerts');
  let counter = 0;
  
  button.onclick = function() {
    counter = counter + 1;
    
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-primary';
    alertDiv.textContent = 'Alert ' + counter;
    
    const firstChild = container.firstChild;
    
    if (firstChild) {
      container.insertBefore(alertDiv, firstChild);
    } else {
      container.appendChild(alertDiv);
    }
  };
  // END
};