// ------ RESENI ------

const selectPlan = (planNumber) => {
    
    const selectedEl = document.querySelector('.plan--selected');
    
    if (selectedEl) {
      selectedEl.classList.remove('plan--selected');
    }

    const selectedPlan = document.getElementById(`plan${planNumber}`);
    selectedPlan.classList.add('plan--selected');
  };
  
  selectPlan(3); 
  selectPlan(1);
  selectPlan(2);