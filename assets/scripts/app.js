const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInput = addMovieModal.querySelectorAll('input');

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => { //function () {}
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
}

const addMovieHandler = () => {
  const titleValue = userInput[0].value;
  const imgUrlValue = userInput[1].value;
  const ratingValue = userInput[2].value;

  if (
    titleValue.trim() === '' || 
    imgUrlValue.trim() === '' || 
    ratingValue.trim() === '' || 
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
      alert('Please enter valid values (rating between 1 & 5)');
      return;
  }

};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);