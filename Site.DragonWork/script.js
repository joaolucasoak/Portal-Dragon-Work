function toggleImages(button) {
    var moreImages = button.previousElementSibling;
    if (moreImages.style.display === 'block') {
        moreImages.style.display = 'none';
        button.textContent = 'Mostrar mais imagens';
    } else {
        moreImages.style.display = 'block';
        button.textContent = 'Esconder imagens';
    }
}