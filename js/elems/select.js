
/**
 * Вешает обработчики для взаимодействия с выпадающим списком.
 */
export function toggleCastomSeelct(){
  const selectSingle = document.querySelector('.select__input');
  const selectSingleTitle = selectSingle.querySelector('.select__title');
  const selectSingleLabels = selectSingle.querySelectorAll('.select__option-label');

  // обработчик при нажатии на выпадающий список
  selectSingleTitle.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
      selectSingle.setAttribute('data-state', '');
    } else {
      selectSingle.setAttribute('data-state', 'active');
    }
  });

  // обработчик выбора элемента списка
  for (let i = 0; i < selectSingleLabels.length; i++) {
    selectSingleLabels[i].addEventListener('click', (evt) => {
      selectSingleTitle.textContent = evt.target.textContent;
      selectSingle.setAttribute('data-state', '');
    });
  }

  // обработчик неявного закрытия списка (опционально)
  document.addEventListener('click', (event) => {
    if (!selectSingle.contains(event.target) && !selectSingleTitle.contains(event.target)) {
      selectSingle.setAttribute('data-state', '');
    }
  });
}