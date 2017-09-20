$(function() {
	$("#voice_key").hide();
	$("#chatExtra").hide();
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
	$("#tool_index").hide();
	$("#tool_add_ex").hide();
	$(".nav_btn_no").css({
		"outline": "none"
	});
	$("#file").hide();
	$("#weixin").attr('color', "rgb(102,187,106)");
});

function display_index() {

	$("#chat-bottom").hide();
	$("#content-index").show();
	$("#content-discover").hide();
	$("#content-ad_book").hide();
	$("#content-me").hide();
	$("#headline").text("微信(1)");
	$("#tool").show();
	$("#pic1").attr('src', "img/icon/menu/聊天-press.svg");
	$("#pic2").attr('src', "img/icon/menu/通讯录.svg");
	$("#pic3").attr('src', "img/icon/menu/发现.svg");
	$("#pic4").attr('src', "img/icon/menu/me.svg");
	$("#weixin").attr('color', "rgb(102,187,106)");
	$("#txl").attr('color', "rgb(158,158,158)");
	$("#fx").attr('color', "rgb(158,158,158)");
	$("#wo").attr('color', "rgb(158,158,158)");
}

function display_ad_book() {

	$("#content-index").hide();
	$("#content-ad_book").show();
	$("#content-discover").hide();
	$("#content-me").hide();
	$("#headline").text("通讯录");
	$("#tool").hide();
	$("#pic1").attr('src', "img/icon/menu/聊天.svg");
	$("#pic2").attr('src', "img/icon/menu/通讯录-press.svg");
	$("#pic3").attr('src', "img/icon/menu/发现.svg");
	$("#pic4").attr('src', "img/icon/menu/me.svg");
	$("#weixin").attr('color', "rgb(158,158,158)");
	$("#txl").attr('color', "rgb(102,187,106)");
	$("#fx").attr('color', "rgb(158,158,158)");
	$("#wo").attr('color', "rgb(158,158,158)");
}

function display_discover() {

	$("#content-index").hide();
	$("#content-ad_book").hide();
	$("#content-discover").show();
	$("#content-me").hide();
	$("#headline").text("发现");
	$("#tool").hide();
	$("#pic1").attr('src', "img/icon/menu/聊天.svg");
	$("#pic2").attr('src', "img/icon/menu/通讯录.svg");
	$("#pic3").attr('src', "img/icon/menu/发现-press.svg");
	$("#pic4").attr('src', "img/icon/menu/me.svg");
	$("#weixin").attr('color', "rgb(158,158,158)");
	$("#txl").attr('color', "rgb(158,158,158)");
	$("#fx").attr('color', "rgb(102,187,106)");
	$("#wo").attr('color', "rgb(158,158,158)");
}

function display_me() {
	$("#content-index").hide();
	$("#content-ad_book").hide();
	$("#content-discover").hide();
	$("#content-me").show();
	$("#headline").text("我");
	$("#tool").hide();
	$("#pic1").attr('src', "img/icon/menu/聊天.svg");
	$("#pic2").attr('src', "img/icon/menu/通讯录.svg");
	$("#pic3").attr('src', "img/icon/menu/发现.svg");
	$("#pic4").attr('src', "img/icon/menu/me-press.svg");
	$("#weixin").attr('color', "rgb(158,158,158)");
	$("#txl").attr('color', "rgb(158,158,158)");
	$("#fx").attr('color', "rgb(158,158,158)");
	$("#wo").attr('color', "rgb(102,187,106)");
}

function display_friends() {
	$("#friends").show(300);
	$("#content-discover").hide();
	$("#tool_camera").show();
	$("#headline").text("朋友圈");
	$("#tool_discover").show();
	$("#nav").hide();
}

var add_no = true;

function display_tool_add() {
	if(add_no) {
		$("#tool_add_ex").show();
		add_no = false;
	} else {
		$("#tool_add_ex").hide();
		add_no = true;
	}

}

function back_discover() {
	$("#friends").hide();
	$("#content-discover").show();
	$("#tool_camera").hide();
	$("#tool_discover").hide();
	$("#nav").show();
	$("#headline").text("发现");
}