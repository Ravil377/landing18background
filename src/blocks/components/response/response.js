const inputFile = document.querySelector('.response__input-file');
const spanFile = document.querySelector('.response__file');

inputFile.addEventListener('change', () => {
    spanFile.textContent = inputFile.value;
})