
$(document).ready(function(){

    // Init ScrollMagic library

    // init controller
    var controller = new ScrollMagic.Controller();

    // Animation
    if($('.image').length){
        $('.image').each(function(){
            var animation = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.9,
                // reverse: false
            })
            .setClassToggle(this, 'active-animation')
            .addTo(controller);
        });
    }
    
});