const moonScroll = () => {

    const body = document.querySelector('body');

    const addAnimation = () => {

        if (body.classList.contains('dark') && window.scrollY < 1000) {
            body.style.setProperty(
                "--scroll",
                window.pageYOffset / (body.offsetHeight - window.innerHeight)
            )
        }
    }

    window.addEventListener('scroll', addAnimation, false)

}

moonScroll()