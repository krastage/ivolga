import '../scss/style.scss';

const body = document.querySelector('body');

body.style.paddingTop = `${document.querySelector('.main-header').offsetHeight}px`;

const modalButtons = body.querySelectorAll('.modal-button');
const closeButtons = body.querySelectorAll('.close-button');

modalButtons.forEach((modalButton) => {
    modalButton.addEventListener('click', () => {
        const modal = body.querySelector(modalButton.dataset.src);
        if (modal.classList.contains('active')) {
            return;
        }
        body.querySelector('.modal-right.active')?.classList.remove('active');
        modal.classList.add('active');
        body.classList.add('modal-open');
    });
});

closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
        closeButton.closest('.modal-right').classList.remove('active');
        body.classList.remove('modal-open');
    });
})

window.addEventListener('click', (evt) => {
    const target = evt.target;

    if (target.closest('.modal-right-content') || target.closest('.modal-button')) {
        return;
    }

    body.querySelector('.modal-right.active')?.classList.remove('active');
    body.classList.remove('modal-open');
});



/// PRODUCT PAGE

const picksButton = document.querySelectorAll('.product-config__colors-button');

if (picksButton.length > 0) {
    picksButton.forEach((pickButton) => {
        pickButton.addEventListener('click', () => {
            const color = pickButton.dataset.color;
            document.querySelector('.product-config__colors p').textContent = color;
        })
    })
}

const showMoreButtons = document.querySelectorAll('.product-config__button');

if (showMoreButtons.length > 0) {
    showMoreButtons.forEach((showMoreButton) => {
        showMoreButton.addEventListener('click', () => {
            showMoreButton.querySelector('.product-config-details-button__details').classList.toggle('active');
        })
    })
}