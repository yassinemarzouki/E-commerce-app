function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "flex"; 
        setTimeout(() => {
            popup.querySelector('.popup-content').classList.add('active');
        }, 50); 
    }
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.querySelector('.popup-content').classList.remove('active');
        setTimeout(() => {
            popup.style.display = "none"; 
        }, 400); 
    }
}

window.onclick = function (event) {
    const popups = document.querySelectorAll('.product-popup');
    popups.forEach((popup) => {
        if (event.target === popup) {
            closePopup(popup.id);
        }
    });
};

document.querySelectorAll('.pro').forEach(item => {
    item.addEventListener('click', function () {
        const popupId = this.getAttribute('data-popup-id');
        openPopup(popupId);
    });
});
