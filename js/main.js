(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js')

    var menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__btn',
        widthEnabled: 1024
    })

    var carouselPhrases = new Carousel({
        container:'.phrases-slider .slideshow',
        itens:'p',
        btnPrev:'.prev',
        btnNext: '.next'
    })

    var carouselArtMovements = new Carousel({
        container:'artmovements-slideshow',
        itens:'section',
        btnPrev:'.prev',
        btnNext: '.next'
    })
})