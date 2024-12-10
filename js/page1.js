document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.querySelector('.wrapper');
    envelope.classList.add('hidden');
    setTimeout(() => {
      envelope.classList.remove('hidden');
    }, 100); 
  });

