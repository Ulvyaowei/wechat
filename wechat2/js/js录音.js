var sound;
var curr_voice = '<div><div class="chat-message chat-left"><div class="chat-message-content chat-green text_right"><img class="voice_img" src="img/chat/语音消息.svg" width="0px" height="16px"/></div><div class="chat-message-photo-me"></div></div></div>';
var mic_div = '<div id="mic"><div id="mic_img"><img src="img/chat/话筒音量1.svg" width="80px" height="80px" /></div><div id="mic_text"></div></div>';
var mic = $(mic_div);
$("#voice_key").mousedown(function() {
	flag3 = true;
	y1 = getMouseXY().y;
	$("body").append(mic);
	t1 = new Date().getTime();
	var i = 1;
	$("#voice_key").html("松开 结束").css("background-color", "rgba(189,189,189,1)");
	$("#mic_text").html("手指上滑， 取消发送").css("background-color", "");

	sound = setInterval(function() {
		t12 = new Date().getTime();
		i = Math.round(Math.random() * 6 + 1);
		$("#mic_img img").attr("src", "img/chat/话筒音量" + i + ".svg");
	}, 500);
	//move
	$("body").mousemove(function() {
		if(flag3) {
			var y2 = getMouseXY().y;
			if(y1 - y2 > 100) {
				flag2 = false;
				clearInterval(sound);
				$("#voice_key").html("松开 取消")
				$("#mic_img img").attr("src", "img/chat/取消发送.svg");
				$("#mic_text").html("松开手指， 取消发送").css("background-color", "rgba(183,28,28 ,1)");
			} else {
				flag2 = true;
				//				$("#voice_key").html("松开 结束");
				//				$("#mic_text").html("手指上滑， 取消发送");
				//				sound = setInterval(function() {
				//					i = Math.round(Math.random() * 6 + 1);
				//					$("#mic_img img").attr("src", "img/chat/话筒音量" + i + ".svg");
				//				}, 500);
			}
			if(!flag3) {
				voice = setTimeout(function() {
					$(".voice_img").css("width", "20px");
					$(curr_chat_div).append(curr_voice);
				}, 1000);
			}
		} else {
			return;
		}
	});

});
$("body").mouseup(function() {
	if(flag3) {
		flag3 = false;
		clearInterval(sound);
		var d = new Date();
		t2 = d.getTime();
		if(t2 - t1 < 1000) {
			$("#mic_img img").attr("src", "img/chat/叹号.svg");
			$("#mic_text").html("说话时间太短").css({
				"color": "white",
				"font-weight": "bold"
			});
			setTimeout(function() {
				$("#voice_key").html("按住 说话").css("background-color", "rgba(245,245,245,1)");
				$("#mic").remove();
			}, 1000)

		} else {
			$("#voice_key").html("按住 说话").css("background-color", "rgba(245,245,245,1)");
			$("#mic").remove();
			if(flag2) {
				$(curr_chat_div).append(curr_voice);
				$(".voice_img").css("width", "20px");
			} else {
				$(curr_voice).remove();
				//curr_voice.remove();
			}
		}
	} else {
		return;
	}
})