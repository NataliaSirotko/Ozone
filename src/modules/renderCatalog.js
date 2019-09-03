import filter from './filter';

export default function renderCatalog() {
    // добавили сначала через дата атрибут в карточку категорию
        const cards = document.querySelectorAll('.goods .card');
        const catalogList = document.querySelector('.catalog-list');
        const catalogWrapper = document.querySelector('.catalog');
        const catalogBtn = document.querySelector('.catalog-button');
        const categories = new Set();
        const filterTitle = document.querySelector('.filter-title h5');
    
        cards.forEach(card => {
            //console.dir(card); //dir- вывод в иде объекта. раскрываем его- там есть dataset? и в нем пункт category
            console.dir(card.dataset.category);
            categories.add(card.dataset.category);
        });
    
        categories.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            catalogList.appendChild(li);
        });
        //console.log(categories);
    
        const allLi = catalogList.querySelectorAll('li');
        // кнопка каталог вверху
        catalogBtn.addEventListener('click', (event) => {
            if (catalogWrapper.style.display) {
                catalogWrapper.style.display = '';
            } else {
                catalogWrapper.style.display = 'block';
            }
            
            if (event.target.tagName === 'LI') {
                // cards.forEach(card => {
                //     if (card.dataset.category === event.target.textContent) { // фильтр в каталоге
                //         card.parentNode.style.display = ''; //без parentNode -при выборе в каталоге карточки будут оставаться на своем месте и будет пустое место
                //     } else {
                //         card.parentNode.style.display = 'none';
                //     }
                // });
                allLi.forEach(it => {
                    if (it === event.target) {
                        it.classList.add('active');
                    } else {
                        it.classList.remove('active');
                    }
                });
                filterTitle.textContent = event.target.textContent;
                filter();
            }
        });
    }