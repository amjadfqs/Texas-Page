
        const Button = document.getElementsByClassName('burger')[0]
        const Links = document.getElementsByClassName('nav-links')[0]
        const Drop = document.getElementsByClassName('SubMenu')[0]

        Button.addEventListener('click' ,() => {
            Links.classList.toggle('active')
        } )

        Drop.addEventListener('click' ,() => {
            Drop.classList.toggle('active')
        } )
    
//    -------------------------------------------------



