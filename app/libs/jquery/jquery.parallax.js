(function($) {

    $.fn.parallax = function(options) {
        var speed = options.speed;
        if (!!speed && speed > 5) options.speed = 5;
        if (!!speed && speed < 1) options.speed = 1;

        var settings = $.extend({
            "speed" : "3"
        }, options);

        return this.each(function() {
            var $self = $(this);

            $self.wrapInner('<div class="parallax__content">');

            $('<div>')
                .addClass('parallax__image')
                .css("background-image", "url('" + $self.data('parallax-image') + "')")
                .prependTo($self);

            function parallaxInit() {
                var pHeight = $self.height();
                var $parallaxImage = $self.children('.parallax__image');

                $parallaxImage.css({'height': pHeight * 2,
                                    'top': -pHeight});

                var scrollTop = $(document).scrollTop();
                var pTop = $self.offset().top;
                var distToP = pTop - $(window).height();
                var scrollBottom = scrollTop - distToP;
                var pBottom = pTop + pHeight;

                if (scrollTop >= distToP && scrollTop <= pBottom) {
                    console.log(scrollBottom);
                    $parallaxImage.css({
                        "transform" : "translate3d(0px, " + scrollBottom * settings.speed / 100 + "%, 0px)"
                         
                    });
                }
                    
            }

            $(window).on('scroll', function() {
                parallaxInit();
            });

            $(window).on('load', function() {
                parallaxInit();
            });

            $('*').on('resize', function() {
                parallaxInit();
            });
        });
    };

})(jQuery);