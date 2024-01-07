//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
  const lines = document.querySelectorAll('.line');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let currentCircle = 1;

  function updateButtons() {
    prevButton.disabled = currentCircle === 1;
    nextButton.disabled = currentCircle === circles.length;
  }

  function updateProgress() {
    circles.forEach((circle, index) => {
      if (index < currentCircle) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });

	  lines.forEach((line, index) => {
      if (index < currentCircle - 1) {
        line.classList.add('active-line');
      } else {
        line.classList.remove('active-line');
      }
    });
	  
  }

  function nextCircle() {
    if (currentCircle < circles.length) {
      currentCircle++;
      updateProgress();
      updateButtons();
    }
  }

  function prevCircle() {
    if (currentCircle > 1) {
      currentCircle--;
      updateProgress();
      updateButtons();
    }
  }