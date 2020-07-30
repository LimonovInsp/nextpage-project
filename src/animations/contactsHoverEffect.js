function contactsHoverEffect() {
  const contactsSection = document.querySelector('.contacts');
  const contactsPath = document.querySelector('.contacts_path');

  contactsSection.addEventListener('mouseover', (event) => {
    contactsPath.style.transform = 'rotate(43.5deg)';
  });

  contactsSection.addEventListener('mouseout', (event) => {
    contactsPath.style.transform = 'rotate(0)';
  });
}

export default contactsHoverEffect;
