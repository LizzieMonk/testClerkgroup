
/**
 * Подключает/отключает декор иконок.
 */
export function toggleDecorIcons() {
  const width = window.innerWidth;

  const process = document.querySelector(".icons__list");

  for (let i = 0; i < process.children.length; i++) {
    process.children[i]
      .querySelector(".icon__decor")
      .classList.remove("hidden");
  }
  let widthProcess = process.clientWidth;
  let widthOneProcess = process.children[0]?.clientWidth;

  if (widthOneProcess) {
    let numberProcess = Math.trunc(widthProcess / widthOneProcess);

    let realWidthProcess =
      numberProcess * widthOneProcess + (numberProcess - 1) * 30;

    //максимальное количество в одной строке
    if (realWidthProcess > widthProcess) {
      //максимальное количество в одной строке
      numberProcess--;
    }

    if (numberProcess == 1 && width > 320) {
      for (let i = 0; i < process.children.length; i++) {
        process.children[i]
          .querySelector(".icon__decor")
          .classList.add("hidden");
      }
    } else if (numberProcess > 1) {
      deleteDecorRecursion(numberProcess, process.children);
    } else {
      process.children[process.children.length - 1]
        .querySelector(".icon__decor")
        .classList.add("hidden");
    }
  }
}

/**
 * Рекурсивно проходит по всем иконкам и при необходимости скрывает декор.
 * @param {number} numberInOneStroke Максимальное количество иконок в одной строке.
 * @param {HTMLCollection} elems Все икноки.
 */
function deleteDecorRecursion(numberInOneStroke = 2, elems) {
  if (numberInOneStroke < elems.length) {
    elems[numberInOneStroke - 1]
      .querySelector(".icon__decor")
      .classList.add("hidden");

    numberInOneStroke *= 2;
    deleteDecorRecursion(numberInOneStroke, elems);
  } else {
    elems[elems.length - 1]
      .querySelector(".icon__decor")
      .classList.add("hidden");
  }
}

/**
 * Анимирование декора иконок при наведении мышью.
 */
export function animationDecorIcons() {
  const allNestedLi = document
    .querySelector(".icons")
    .querySelectorAll("li li"); // все вложенные li

  let time = allNestedLi.length * 0.07;

  document
    .querySelector(".icons")
    .addEventListener("mouseenter", startAnimation);

  function startAnimation() {
    allNestedLi.forEach((li, index) => {
      li.style.animation = "none";

      // принудительная перерисовка
      void li.offsetWidth;

      // Запускаем анимацию заново с задержкой
      li.style.animation = `colorChange ${time}s forwards`;
      li.style.animationDelay = `${index * 0.07}s`;
    });
  }
}
