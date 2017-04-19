//Variabile
var polls, html, filterList = [], i = 0;
var countyList = ['Arad', 'Arges','Bacau','Bihor','Bistrita-Nasaud'];
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
  	polls = $.parseJSON(data);
}
//Pentru test
polls = [{category: 'SP' , title: 'Spital judetean' , description: 'laassjfbs sjbsj b bsjb js jsjb sbsbdsb sbdj sbjd bsjsbj sbj ' , id: 1 },
		{category: 'SC' , title: 'Scoala primara', description:'sdfsdfs sfsd' , id: 2},
		{category: 'DR', title: 'Drumuri europene' , description: 'dfdfd' , id: 3},
		{category: 'SP', title: 'Spital central' , description: 'afdfsf dsfsd' , id: 4 }];

//Category Filter
function add_cat(id) {
	if (filterList.indexOf(id) == -1){
		filterList[i] = id
		++i;
	} else {
		for( var k = 0; k < filterList.length; ++k){
			if (filterList[k] === id) {
				filterList.splice(k,1);
				--i;
			}
		}
	}
}
function create_polls_list() {
	html = '<ol>';
	for (var i = 0; i < polls.length; ++i) {
		for(var j = 0; j < filterList.length; ++j)
			if (polls[i].category === filterList[j]) {
				html += '<li><h4>' + polls[i].title + '</h4></li>';
				html += '<a href="/votarea/'+ polls[i].id + '">';
				html += '<p>' + polls[i].description + '</p>';
				html += '</a>';
			}
	}
	html += '</ol>';
	$("div#poll-list").html(html);
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
