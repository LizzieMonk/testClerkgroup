/**
 * Меняет экранное значение ползунка.
 */
export function changeInputRangeTextValue(){
    const rangeInput = document.getElementById('range');
    const rangeValue = rangeInput.parentElement.querySelector('.range__value');

    rangeInput.addEventListener('input', () => {
        rangeValue.textContent = `${rangeInput.value}%`;
    });

    //первоначальное инициализация
    rangeValue.textContent = `${rangeInput.value}%`;
}