function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: "200%",
        triggerElement: ".shop-title",
        triggerHook: 0
    })

    .setPin(".shop-title")
    .addIndicators()
    .addTo(controller);
}

splitScroll();