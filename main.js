const openCookieButton = document.querySelectorAll('[data-modal-target')
const closeCookieButton = document.querySelectorAll('[data-close-button')

openCookieButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openCookie(modal)
    })
})

closeCookieButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeCookie(modal)
    })
})

function openCookie(modal) {
    if (modal == null) return
    modal.classList.add('active')
}

function closeCookie(modal) {
    if (modal == null) return
    modal.classList.remove('active')
}