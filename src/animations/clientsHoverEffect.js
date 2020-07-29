function clientsHoverEffect() {
  const clientsPicture = document.querySelectorAll('.clients_picture');

  clientsPicture.forEach(clientsItem => {
    clientsItem.addEventListener('mouseover', (event) => {
      event.currentTarget.querySelector('.clients_image')
        .style.display = 'none';

      event.currentTarget.querySelector('.clients_hover')
        .style.display = 'flex';
    });

    clientsItem.addEventListener('mouseout', (event) => {
      event.currentTarget.querySelector('.clients_image')
        .style.display = 'flex';

      event.currentTarget.querySelector('.clients_hover')
        .style.display = 'none';
    });
  });
}

export default clientsHoverEffect;
