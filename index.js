console.log('funguju');

let tah = 'circle';
const hrac = document.querySelector('#hrac');

const ukazSymbol = (event) => {
  if (tah === 'circle') {
    event.target.classList.add('board__field--circle');
    event.target.disabled = true;
    hrac.src = 'obrazkypravidla/cross.svg';
    hrac.alt = 'křížek';
    tah = 'cross';
  } else {
    event.target.classList.add('board__field--cross');
    event.target.disabled = true;
    hrac.src = 'obrazkypravidla/circle.svg';
    hrac.alt = 'kolečko';
    tah = 'circle';
  }
};

const policko = document.querySelectorAll('.mrizka_button');

for (let i = 0; i < policko.length; i++) {
  policko[i].addEventListener('click', ukazSymbol);
}
