const moonScroll = () => {

    const halfMoon = document.querySelector('.half-moon')
    const fullMoon = document.querySelector('.full-moon')

    const addAnimation = () => {

        if (window.scrollY < 800) {
            document.body.style.setProperty(
                "--scroll",
                window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
            )
        }

        console.log(window.scrollY)
    }

    window.addEventListener('scroll', addAnimation, false)

}

moonScroll()