const redWines = document.querySelector('#grape-varietal-red');
const whiteWines = document.querySelector('#grape-varietal-white');

$('.wine-button').on('click', showGrapes);

function showGrapes(e) {
  const grapeChoice = e.target;
  switch (grapeChoice.id) {
    case 'grape-white':
      console.log('white clicked');
      whiteWines.classList.remove('invisible');
      redWines.classList.add('invisible');
      break;
    case 'grape-red':
      console.log('white clicked');
      whiteWines.classList.add('invisible');
      redWines.classList.remove('invisible');
      break;
    default:
      break;
  }
}

$('.white-wine-varietal').on('click', toggleClicked);
$('.red-wine-varietal').on('click', toggleClicked);

function toggleClicked(e) {
  console.log(e.target);
}
