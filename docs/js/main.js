const redWines = document.querySelector('#grape-varietal-red');
const whiteWines = document.querySelector('#grape-varietal-white');
const sparklingWines = document.querySelector('#grape-varietal-sparkling');
const roseWines = document.querySelector('#grape-varietal-rose');

$('.wine-button').on('click', showGrapes);

function showGrapes(e) {
  const grapeChoice = e.target;
  switch (grapeChoice.id) {
    case 'grape-white':
      whiteWines.classList.remove('invisible');
      redWines.classList.add('invisible');
      sparklingWines.classList.add('invisible');
      roseWines.classList.add('invisible');
      break;
    case 'grape-red':
      redWines.classList.remove('invisible');
      whiteWines.classList.add('invisible');
      sparklingWines.classList.add('invisible');
      roseWines.classList.add('invisible');
      break;
    case 'grape-sparkling':
      sparklingWines.classList.remove('invisible');
      whiteWines.classList.add('invisible');
      redWines.classList.add('invisible');
      roseWines.classList.add('invisible');
      break;
    case 'grape-rose':
      roseWines.classList.remove('invisible');
      sparklingWines.classList.add('invisible');
      whiteWines.classList.add('invisible');
      redWines.classList.add('invisible');
      break;
    default:
      break;
  }
}

$('.white-wine-varietal').on('click', toggleClicked);
$('.red-wine-varietal').on('click', toggleClicked);
$('.sparkling-wine-varietal').on('click', toggleClicked);
$('.rose-wine-varietal').on('click', toggleClicked);

function toggleClicked(e) {
  const grapeClicked = e.target;
  if (
    grapeClicked.classList.contains('white-wine-varietal') ||
    grapeClicked.classList.contains('sparkling-wine-varietal')
  ) {
    grapeClicked.classList.toggle('btn-outline-warning');
    grapeClicked.classList.toggle('btn-warning');
  } else if (
    grapeClicked.classList.contains('red-wine-varietal') ||
    grapeClicked.classList.contains('rose-wine-varietal')
  ) {
    grapeClicked.classList.toggle('btn-outline-danger');
    grapeClicked.classList.toggle('btn-danger');
  }
}
