var langs = ['es','en'];
var langCode = '';
langCode = navigator.language.substr (0, 2);
var langJS = null;
var translate = function (jsdata){
    $("[drc]").each (function (index){
        if($(this).attr('drc').includes('.')){
            var obj = $(this).attr('drc').split(".");
            strTr = jsdata[obj[0]][obj[1]];
            if(obj[1].includes('placeholder'))
                $(this).attr("placeholder", strTr);
            else
                $(this).html (strTr);
        }else{
            var strTr = jsdata[$(this).attr('drc')];
	        $(this).html (strTr);
        }
	});
}
$.getJSON("../lang/"+langCode+".json", translate);