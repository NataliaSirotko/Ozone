'use strict';

import getData from './modules/getData'; // дописывать .js не надо в файле, вебпак понимает что берет
import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import toggleCheckbox from './modules/toggleCheckbox';
import toggleCart from './modules/toggleCart';
import addCart from './modules/addCart';
import actionPage from './modules/actionPage';
// filter не импортируем!

(async function() {
    const db = await getData();
        renderCards(db);
        renderCatalog(); // все render лучше вначале ставить, чтобы код не поломался
        toggleCheckbox();
        toggleCart();
        addCart();
        actionPage();
})();

// getData().then((data) => {
//     renderCards(data);
//     renderCatalog(); // все render лучше вначале ставить, чтобы код не поломался
//     toggleCheckbox();
//     toggleCart();
//     addCart();
//     actionPage();
// });  // второй способ -это запихнуть  getDate в самовызыв. функцию
