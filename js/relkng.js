function RE(regex_input, text_input){
    var re = this;
    re.regex_options = 'gi'
    re.regex_input = regex_input;
    re.text_input = text_input;
    re.regex_input.keyup(function() { re.regex_change() });
    re.text_input.keyup(function() { re.text_change() });
};

RE.prototype.regex_change = function(){
    this.match(this.regex_input.val());
};

RE.prototype.text_change = function(){ 
    this.match(this.regex_input.val());
};

RE.prototype.match = function(string){
    if(string != null && string != ""){
        var parent = this.regex_input.parent('.control-group');
        try {
            this.update_results(this.text_input.val().match(new RegExp(string, this.regex_options)));
            parent.removeClass('error');
            parent.find('.help-inline').html('&nbsp;');
        } catch (e) {
            parent.addClass('error');
            parent.find('.help-inline').html(e);
        }
    }
};

RE.prototype.update_results = function(matches){
    $("#results").html('<ul class="unstyled"></ul>');
    for(var i in matches){
        $("#results ul").append("<li>" + matches[i] + "</li>");
    }
};
