document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('scoreModal');
    const closeBtn = document.querySelector('.close');
    const scoreButtons = document.querySelectorAll('.score-btn');

    scoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});