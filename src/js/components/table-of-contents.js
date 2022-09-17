const setActiveTableOfContents = () => {
    const links = Array.from(document.querySelectorAll('.table-of-contents a'))
    const lastVisible = links
        .slice()
        .reverse()
        .find(link => {
            const el = document.getElementById('documentation').querySelector(link.hash)
            return el.getBoundingClientRect().top <= 56;
        }) ?? links[0]
    links.forEach(link => {
        if (link === lastVisible) {
            link.classList.add('active')
        } else {
            link.classList.remove('active')
        }
    })
}

window.addEventListener('load', () => {
    setActiveTableOfContents()
    window.addEventListener('scroll', setActiveTableOfContents, { passive: true })    
});