function clientsHoverLinkEffect() {
  const clientsLink = document.querySelectorAll('.clients_hover_link');

  clientsLink.forEach(clientsLinkItem => {
    clientsLinkItem.addEventListener('mouseover', (event) => {
      const childPath = event.target.parentElement
        .querySelector('.clients_hover_path');

      childPath.style.transform = 'rotate(90deg)';
    });

    clientsLinkItem.addEventListener('mouseout', (event) => {
      const childPath = event.target.parentElement
        .querySelector('.clients_hover_path');

      childPath.style.transform = 'rotate(0)';
    });
  });
}

export default clientsHoverLinkEffect;
