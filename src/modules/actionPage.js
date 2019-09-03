import filter from './filter';

export default function actionPage() {
    const cards = document.querySelectorAll('.goods .card'),
        discountCheckbox = document.querySelector('#discount-checkbox'),
        min = document.querySelector('#min'),
        max = document.querySelector('#max'),
        search = document. querySelector('.search-wrapper_input'),
        searchBtn = document. querySelector('.search-btn');

     //   фильтр по акции
    discountCheckbox.addEventListener('click', filter);
    // фильтр по цене
    min.addEventListener('change', filter);
    max.addEventListener('change', filter);

    // function filterPrice() {
    //     cards.forEach(card => {
    //         const cardPrice = card.querySelector('.card-price');
    //         const price = parseFloat(cardPrice.textContent);
    //         // console.log(price);
    //         // console.log(max.value);
    //         // console.log(min.value);
    //         if ((min.value && price < min.value) || (max.value && price > max.value)) {
    //             card.parentNode.style.display = 'none';
    //         } else {
    //             //document.querySelector('.goods').appendChild(card.parentNode);
    //             card.parentNode.style.display = '';
    //         }
    //     });
    // }    

    //search
    searchBtn.addEventListener('click', () => {
        //const searchText = search.value;
        const searchText = new RegExp(search.value.trim(), 'i'); // 'ig'
        cards.forEach(card => {
            const title = card.querySelector('.card-title');
            if (!searchText.test(title.textContent)) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
        });
        search.value = '';
    });
}