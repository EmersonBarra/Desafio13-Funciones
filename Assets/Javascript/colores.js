function cambiarColor(event) {
    event.target.style.backgroundColor = 'black';
}

document.getElementById('ele1').addEventListener('click', cambiarColor);
document.getElementById('ele2').addEventListener('click', cambiarColor);
document.getElementById('ele3').addEventListener('click', cambiarColor);
document.getElementById('ele4').addEventListener('click', cambiarColor);