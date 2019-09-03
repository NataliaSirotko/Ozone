export default function addCart() {
    const cards = document.querySelectorAll('.goods .card'),
        cardWrapper = document.querySelector('.cart-wrapper'),
        cardEmpty = document.getElementById('cart-empty'),
        countGoods = document.querySelector('.counter');

    cards.forEach((item) => {
        const btn = item.querySelector('button');

        btn.addEventListener('click', () => {
            //console.log(item);
            const cardClone = item.cloneNode(true);
            cardWrapper.appendChild(cardClone);
            //cardEmpty.remove();
            showData();

            const removeBtn = cardClone.querySelector('.btn');
            removeBtn.textContent = 'Удалить из корзины';
            removeBtn.addEventListener('click', () => {
                cardClone.remove();
                showData();
            });
        });

    });

    function showData() {
        const cardsCart = cardWrapper.querySelectorAll('.card'),
            cardsPrice = cardWrapper.querySelectorAll('.card-price'),
            cardTotal = document.querySelector('.cart-total span');
        let sum = 0;
        countGoods.textContent = cardsCart.length;
        //console.log(cardsCart.length);

        cardsPrice.forEach(item => {
            let price = parseFloat(item.textContent);   
            sum += price;
            console.log(sum);
        });

        cardTotal.textContent = sum;

        if (cardsCart.length !== 0) {
            cardEmpty.remove();
        } else {
            cardWrapper.appendChild(cardEmpty);
        }
    }
}