(function($) {

    $.fn.parallax = function(options) {
        var speed = options.speed;

        if (!!speed) {
            if (speed > 5) speed = 5;
            if (speed < 1) speed = 1;
        } else speed = 3;

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
                    $parallaxImage.css({
                        "transform" : "translate3d(0px, " + scrollBottom * speed / 100 + "%, 0px)"
                    });
                }     
            }

            $(window).bind('scroll load resize', function() {
                parallaxInit();
            });
        });
    };

})(jQuery);