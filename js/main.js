let accToggle = document.getElementsByClassName('accordion__title');

for (let i = 0; i < accToggle.length; i++) {
    accToggle[i].addEventListener('click', function () {
        this.classList.toggle('accordion__title_active');
        let accContent = this.nextElementSibling;
        if (accContent.style.maxHeight) {
            accContent.style.maxHeight = null;
        } else {
            accContent.style.maxHeight = '100%';
        }
    });
}