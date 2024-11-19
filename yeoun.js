
  function openStandModal() {
    document.getElementById('stand-modal').style.display = 'flex';
  }

  function openCushionModal() {
    document.getElementById('cushion-modal').style.display = 'flex';
  }

  function closeStandModal() {
    document.getElementById('stand-modal').style.display = 'none';
  }

  function closeCushionModal() {
    document.getElementById('cushion-modal').style.display = 'none';
  }

  window.onclick = function(event) {
    const standModal = document.getElementById('stand-modal');
    const cushionModal = document.getElementById('cushion-modal');
    if (event.target === standModal) {
      standModal.style.display = 'none';
    }
    if (event.target === cushionModal) {
      cushionModal.style.display = 'none';
    }
  };

