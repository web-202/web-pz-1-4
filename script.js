document.addEventListener("DOMContentLoaded", function () {
    var menu = document.getElementById("menu");
    var toggleButton = document.getElementById("menu-button");

    toggleButton.addEventListener("click", function () {
        menu.classList.toggle("opened");
    });
});
function showImage(imageSrc, additionalText, pageTitle) {
    // Изменяем содержимое страницы
    document.getElementById("additionalText").innerHTML = `<p>${additionalText}</p>`;
    document.getElementById("pageTitle").textContent = pageTitle;

    // Скрываем все картинки, кроме выбранной
    var imageBlocks = document.querySelectorAll(".image-block");
    imageBlocks.forEach(function (block) {
        block.style.display = "none";
    });

    // Отображаем только выбранную картинку
    var selectedImage = document.querySelector(`img[src="${imageSrc}"]`);
    if (selectedImage) {
        selectedImage.parentElement.parentElement.style.display = "block";
    }
}
