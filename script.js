// CONSTANTS

const openModal = document.querySelector('.modalBtn');
const closeModal = document.querySelector('.closeModal');
const modalOverlay = document.querySelector('.modalOverlay');

// EVENT LISTENER

openModal.addEventListener('click', function () {
  modalOverlay.classList.add('modalActive');
});

closeModal.addEventListener('click', function () {
  modalOverlay.classList.remove('modalActive');
});
