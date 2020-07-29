
function headerHeadlineMoving() {
  const presentation = document.querySelector('.header_presentation');

  document.body.addEventListener('mousemove', (event) => {
    const rotation = {
      x: -(event.clientX - presentation.getBoundingClientRect().left)
        * 20 / window.innerWidth,
      y: -(event.clientY - presentation.getBoundingClientRect().top)
        * 20 / window.innerHeight,
    };

    // eslint-disable-next-line max-len
    presentation.style.transform = `rotateX(${rotation.y}deg) rotateY(${rotation.x}deg)`;
  });
}

export default headerHeadlineMoving;
