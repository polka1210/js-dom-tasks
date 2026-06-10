export default () => {
  // BEGIN
  const tabs = document.querySelectorAll('[data-bs-toggle="tab"]');
  
  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    
    tab.onclick = function(e) {
      const targetId = this.getAttribute('data-bs-target');
      const targetPane = document.querySelector(targetId);
      
      const allTabs = document.querySelectorAll('[data-bs-toggle="tab"]');
      for (let j = 0; j < allTabs.length; j++) {
        allTabs[j].classList.remove('active');
      }
      
      const allPanes = document.querySelectorAll('.tab-pane');
      for (let j = 0; j < allPanes.length; j++) {
        allPanes[j].classList.remove('active');
      }
      
      this.classList.add('active');
      if (targetPane) {
        targetPane.classList.add('active');
      }
    };
    
    if (tab.classList.contains('active')) {
      const targetId = tab.getAttribute('data-bs-target');
      const targetPane = document.querySelector(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    }
  }
  // END
};
