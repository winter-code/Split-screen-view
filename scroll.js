function splitScroll(){
    const controller = new ScrollMagic.Controller();


    new ScrollMagic.Scene({
        duration: '200%', 
        triggerElement:'.right',
        triggerHook: 0
    })

    .setPin('.left')

    .addIndicators({
        colorTrigger:'#DB4437',
        colorStart:'#DB4437',
        colorEnd :'#DB4437',
    })
    .addTo(controller);

}

splitScroll();