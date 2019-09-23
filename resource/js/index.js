var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
$.getJSON(baseUrl+ "/resource/lang/es.json", translate);

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems,{
    	hover : true,
    	constrainWidth : false,
    	coverTrigger : false
    });
});

$("#theme").click(function(event) {
	if ($(this).attr("theme")=="light") {
		$(this).attr("theme", "dark");
		$("body").addClass('dark');
		$("body").removeClass('light');
	}else{
		$(this).attr("theme","light");
		$("body").addClass('light');
		$("body").removeClass('dark');
	}
	console.log($(this).attr("theme"));
});