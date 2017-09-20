$(function(){			
	$(".popup").hide();
	$("#ceng").click(function(){
		var control = $(this).find(".popup");
		$(control).toggle(100)
	});			
})