document.addEvent('domready', function() {
    input = $('accesscode');
    button = $('ok');
    
    function update() {
        if (input.value != '') {
            input.addClass('nonempty');
            button.addClass('nonempty');
        } else {
            input.removeClass('nonempty');
            button.removeClass('nonempty');
        }
    }

    input.addEvent('keyup', update);
    input.addEvent('change', update);
    update()

    if ($('error')) {
        $('error').style.opacity = 0;
        var fx = new Fx.Morph('error', { duration: 500 });
        fx.start({'opacity': 1});
    }
});
