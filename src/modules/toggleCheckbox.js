export default function toggleCheckbox() {
    let checkbox = document.querySelector('#discount-checkbox');
    checkbox.addEventListener('change', function() {
        console.log(this);
        if (this.checked === true) {
            this.nextElementSibling.classList.add('checked');
        } else {
            this.nextElementSibling.classList.remove('checked'); // или toggle
        }
    });
}