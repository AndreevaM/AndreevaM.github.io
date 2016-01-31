$(document).ready(function(){
	$("button").click(function(){
		$("div").animate({
            top: '250px',
            height: '+=150px',
            width: '+=150px',
            fontSize: "140px"
        });
	});

});