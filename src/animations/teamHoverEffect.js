function teamHoverEffect() {
  const teamElementList = document.querySelectorAll('.team_item');

  teamElementList.forEach(teamElement => {
    teamElement.addEventListener('mouseover', (event) => {
      event.currentTarget
        .querySelector('.team_item-hover').style.display = 'flex';
    });

    teamElement.addEventListener('mouseout', (event) => {
      event.currentTarget
        .querySelector('.team_item-hover').style.display = 'none';
    });
  });
}

export default teamHoverEffect;
