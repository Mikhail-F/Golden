let headerNav = document.querySelector('.header__nav')
let navBarP = document.querySelectorAll('.nav__bar .nav li a')
let a = document.querySelectorAll('.nav__bar .nav li a')
let burger = document.querySelector('.burger')
let nav = document.querySelector('.header__nav .nav ul')

for (i = 0; i < a.length; i++) { //Скролл до нужного блока
    a[i].onclick = function (e) {
        e.preventDefault()
        let data = this.dataset.p
        let offset = document.querySelector(data)
        offset.scrollIntoView({ behavior: "smooth", block: 'start' })
    }
}

if (pageYOffset > 710) {
    headerNav.style.position = "fixed"
    Array.from(navBarP, function (e) {
        e.style.color = "black"
    })
}

window.addEventListener('scroll', function () {
    if (pageYOffset > 710) {
        headerNav.style.position = "fixed"
        Array.from(navBarP, function (e) {
            e.style.color = "black"
        })
    }
    else {
        headerNav.style.position = "absolute"
        Array.from(navBarP, function (e) {
            e.style.color = "white"
        })
    }
})

let m = 0
burger.onclick = function () {
    if (m == 0) {
        nav.style.top = '0'
        m++
    }
    else {
        nav.style.top = '-200px'
        m--
    }
}
