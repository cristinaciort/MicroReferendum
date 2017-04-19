//Variabile
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
var poll = data;

//dropdown
function open_menu() {
	$(this).parents().addClass('open');
}

function filter_by_category(id) {
	
}

function create_polls_list() {
	var html = '<div>';
	for (var i = 0; i < poll.length; ++i)
		if (poll[i].category === id) {
			html += '<h2>' + data[i].title + '</h2>';
			html += '<a href="/votarea/'+ data[i].id + '">';
			html += '<p>' + data[i].description + '</p>';
			html += '</a>';
		}
	html += '</div>';
	return html;
}
//poll form data
function poll_info()
{
    var title = $('#pollTitle').val();
    var desc = $('pollDesc').val();
    var category = [];
    var county = [];

    $("input:checkbox[name=category]:checked").each(function(){
    category.push($(this).val());
    });

    $("input:checkbox[name=judet]:checked").each(function(){
    county.push($(this).val());
    });

    $.post("/addPoll", {Titlu: title, Description: desc, Categories:category, Counties: county}, function(){alert('daaa, a mers')}).fail(function() {
    	alert( "error" );
  	});
}
