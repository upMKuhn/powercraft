/*
var host = window.location.host.replace(':'+window.location.port,'');

$.getScript('//'+host + ':35729/livereload.js', function(){
    console.log('livereoload enabled');
});
*/

function onJqueryLoaded() {

    function updateViewportPlugin() {
        $('.animated-fov:belowTheViewportPartly(-150)').each(function(i,elem) {
            console.log('hello')
            const classesToAdd = $(elem).data('on-enter');
            $(elem).addClass(classesToAdd);
        })
    
        $('.animated-fov:aboveTheViewportPartly(-150)').each(function(i, elem) {
            const classesToAdd = $(elem).data('on-leave');
            $(elem).removeClass(classesToAdd);
        })
    }
    
    $(window).resize(updateViewportPlugin)
    $(window).scroll(updateViewportPlugin)
}


function defer(method) {
    if (window.jQuery) {
        method();
    } else {
        setTimeout(function() { defer(method) }, 50);
    }
}
defer(onJqueryLoaded);