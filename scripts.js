const buttons = [
    { id: 'redirectButton', link: 'stolen.html' },
    { id: 'redirectButton2', link: 'stolen2.html' },
    { id: 'redirectButton3', link: 'stolen3.html' }
];

buttons.forEach(button => {
    const btnElement = document.getElementById(button.id);
    btnElement.addEventListener('click', function() {
        window.location.href = button.link;
    });
});