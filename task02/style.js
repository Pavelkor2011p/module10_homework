const updateWidthLabel = () => {
    let currentWidth = window.innerWidth;
    let currentHight = window.innerHeight;
    button.innerHTML = `Ширина экрана ${currentWidth} пикселей;
                Высота экрана ${currentHight}`;
};

btn.addEventListener('click', () => {
    alert(`Ширина экрана ${window.innerWidth} пикселей;
                Высота экрана ${window.innerHeight}`);
});


updateWidthLabel();
window.addEventListener('resize', updateWidthLabel);
