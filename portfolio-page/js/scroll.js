const pageTop = document.getElementById('page-top')
const pag1 = document.getElementById('pag-1')
const services = document.getElementById('services')
const video = document.querySelector('.video-section')

function scrollPageTop() {
    pageTop.scrollIntoView({
        behavior: "smooth"
    })
}

function scrollPag1() {
    pag1.scrollIntoView({
        behavior: "smooth"
    })
}

function scrollServices() {
    services.scrollIntoView({
        behavior: "smooth"
    })
}

function scrollVideo() {
    video.scrollIntoView({
        behavior: "smooth"
    })
}