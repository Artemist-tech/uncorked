const redWines = document.querySelector('#grape-varietal-red');
const whiteWines = document.querySelector('#grape-varietal-white');

$('.wine-button').on('click', showGrapes);

function showGrapes(e) {
  const grapeChoice = e.target;
  switch (grapeChoice.id) {
    case 'grape-white':
      whiteWines.classList.remove('invisible');
      redWines.classList.add('invisible');
      break;
    case 'grape-red':
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
  const grapeClicked = e.target;
  if (grapeClicked.classList.contains('white-wine-varietal')) {
    grapeClicked.classList.toggle('btn-outline-warning');
    grapeClicked.classList.toggle('btn-warning');
  } else {
    grapeClicked.classList.toggle('btn-outline-danger');
    grapeClicked.classList.toggle('btn-danger');
  }
}
