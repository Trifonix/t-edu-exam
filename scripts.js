document.querySelectorAll('.editable').forEach(element => {
    element.addEventListener('input', () => {
        element.classList.add('edited');
        setTimeout(() => {
            element.classList.remove('edited');
        }, 500);
    });
});

document.getElementById('download-button').addEventListener('click', () => {
    const element = document.querySelector('.container');
    html2pdf(element);
});

document.querySelectorAll('.material-wave').forEach(element => {
    element.addEventListener('click', function (e) {
        let wave = this.querySelector('::after');
        let x = e.pageX - this.offsetLeft - 50;
        let y = e.pageY - this.offsetTop - 50;
        wave.style.left = `${x}px`;
        wave.style.top = `${y}px`;
    });
});
