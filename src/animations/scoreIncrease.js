
function scoreIncrease() {
  const bigint = require('big-integer');
  const preloader = document.querySelector('.loader');
  const scoreItem = document.querySelector('.header_score');

  function scoreItemHandler() {
    if (preloader.style.top === '-100%') {
      const digit = (bigint(scoreItem.textContent.replace(/\s/g, '')) + 1);

      scoreItem.textContent = digit;
    }
  }

  setInterval(scoreItemHandler, 10);
}

export default scoreIncrease;
