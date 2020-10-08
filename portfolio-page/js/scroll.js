const pageTop = document.getElementById('page-top')
const about = document.getElementById('about');
const services = document.getElementById('services')
const portfolio = document.getElementById('portfolio')
const contact = document.getElementById('contact')

function scrollPageTop() {
    pageTop.scrollIntoView({
        behavior: "smooth"
    })
}

function scrollAbout() {
    about.scrollIntoView({
        behavior: "smooth"
    })
}

function scrollServices() {
    services.scrollIntoView({
        behavior: "smooth"
    })
}

function scrollPortfolio() {
    portfolio.scrollIntoView({
        behavior: "smooth"
    })
}

function scrollContact() {
    contact.scrollIntoView({
        behavior: "smooth"
    })
}