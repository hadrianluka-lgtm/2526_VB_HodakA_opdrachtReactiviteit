document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('clickMe');
    button.addEventListener('click', () => {
        alert('Hoera! Het script werkt ook!');
        console.log('De knop is aangeklikt!');
    });
    console.log('Website is geladen!');
});
