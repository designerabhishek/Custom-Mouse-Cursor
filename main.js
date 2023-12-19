document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const cursor = document.querySelector('.cursor');
        cursor.style.width = '40px';
        cursor.style.height = '40px';
    });

    link.addEventListener('mouseleave', () => {
        const cursor = document.querySelector('.cursor');
        cursor.style.width = '20px';
        cursor.style.height = '20px';
    });
});
