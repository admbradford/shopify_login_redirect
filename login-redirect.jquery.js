(function($){
    function _getVariables()
    {
        var variables = [], part;
        var parts = $(location).attr('href').slice($(location).attr('href').indexOf('?') + 1).split('&');
            for(var i = 0; i < parts.length; i++)
            {
                part = parts[i].split('=');
                variables.push(part[0]);
                variables[part[0]] = part[1];
            }
        if("next" in variables) {
            return variables["next"];
        } else {
            return 'nothing';
        }
    }
    $(document).ready(function(){
        if($('input[name="checkout_url"]').length){
            var next = _getVariables();
            if(next != 'nothing'){
                $('input[name="checkout_url"]').val(next);
            }
        }
    });
})(jQuery);
