export default function getData(){
    const goodsWrapper = document.querySelector('.goods');
    //console.log(fetch('../db/db.json'));
    //fetch('../db/db.json') //'../db/db1.json' - тобы отловить ошибку
    return fetch('../db/db.json')
        .then((response) => {
            if (response.ok) {
                return response.json(); //(response.json()) // (response.text()) // (response)
            } else {
                throw new Error('Данные не были получены, ошибка: ' + response.status);
            }

        })
        .then((data) => { //then(data => console.log(data))
            //console.log(data);
            //renderCards(data); //убираем эту функцию и дабавляем перед фетч return чтобы после добавления карточки функционал заработал
            //b далеее при вызове функ getData добавляем then и в нем вызывваем все функции вообще обязательно return(data) ставим
            return(data);
        })
        .catch((err) => { //catch(err => console.warn(err))
            console.warn(err);
            goodsWrapper.innerHTML = '<div style="color: red; font-size: 30px">Упс, что-то пошло не так</div>';
        });
}