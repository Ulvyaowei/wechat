$(function() {
	$("#chat-bottom").hide();
	$("#chat-content").hide();
	$("#content-index").show();
	$("#content-discover").hide();
	$("#content-ad_book").hide();
	$("#content-me").hide();
	$("#friends").hide();
	$("#headline").text("微信(1)");
	$("#tool").show();
	$("#tool_camera").hide();
	$("#tool_discover").hide();
	$("#tool_people").hide();
	$(".nav_btn_no").css({
		"outline": "none"
	});
	$("#weixin").attr('color', "rgb(102,187,106)");
});