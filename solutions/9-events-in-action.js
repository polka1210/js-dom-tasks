export default () => {
  // BEGIN
   const navs = document.querySelectorAll('.nav');
  
  for (let i = 0; i < navs.length; i++) {
    const nav = navs[i];
    const tabs = nav.querySelectorAll('[data-bs-toggle="tab"]');
    
    for (let j = 0; j < tabs.length; j++) {
      const tab = tabs[j];
      
      tab.onclick = function(event) {
        const targetId = this.getAttribute('data-bs-target');
        const targetPane = document.querySelector(targetId);
        
        const parentNav = this.closest('.nav');
        const allTabs = parentNav.querySelectorAll('[data-bs-toggle="tab"]');
        
        for (let k = 0; k < allTabs.length; k++) {
          const t = allTabs[k];
          t.classList.remove('active');
        }
        
        const allPanes = document.querySelectorAll('.tab-pane');
        for (let k = 0; k < allPanes.length; k++) {
          const p = allPanes[k];
          p.classList.remove('active');
        }
        
        this.classList.add('active');
        targetPane.classList.add('active');
      };
    }
  }
  // END
};
