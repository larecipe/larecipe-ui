Array.from(document.querySelectorAll('.sidebar a')).forEach(link => {
    if (link.hostname === location.hostname && (link.pathname === location.pathname)) {
        link.classList.add('active')
    }
})