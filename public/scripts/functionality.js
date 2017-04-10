//Variabile
var poll = [];
//login
function login_info() {
	var username = $('#username').val();
	var password = $('#password').val();
	$.post("/login", {username: username, password: password}, function(){alert('daaa, a mers')}).fail(function() {
    	alert( "error" );
  	});
}

//end Login
//harta
function filter_by_county(id) {
	$.get('/polls/' + id)
	.done(function(data) { 
		return data;
	})
	.fail(function() {
    	alert( "error" );
  	});
}
//poll = data;

//dropdown
function open_menu() {
	$(this).parents().addClass('open');
}
/*
function filter_by_category(id) {
	for (var i = 0; i < poll.length; ++i) {
		if (poll[i].category === id)
			//TODO
	}
	
}*/

//poll
/*function get_poll() {
	

}*/