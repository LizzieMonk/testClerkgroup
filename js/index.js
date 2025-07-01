import throttle from "./libs/throttle.js";

import { clickInputDownloadFile } from "./elems/file.js";

import {
    animationDecorIcons,
    toggleDecorIcons
} from "./elems/icons.js";
import { changeInputRangeTextValue } from "./elems/range.js";

import { toggleCastomSeelct } from "./elems/select.js";


// подключение/отключение декора иконок
// опциональное (можно не подключать)
// Ограничить вызов функции 1 раз в 200 мс
const throttledScroll = throttle(100, toggleDecorIcons);
window.addEventListener('resize', throttledScroll);
toggleDecorIcons();

// анимирование декора иконок
// опциональное (можно не подключать)
animationDecorIcons();


// обработчики для взаимодействия с выпадающим списком
toggleCastomSeelct()

// обработчик нажатия на поле загрузки файла
clickInputDownloadFile();

// изменение экранного значения ползунка
changeInputRangeTextValue();