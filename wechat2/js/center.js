window.onload = function() {

	window.onclick = function() {

		end.style.display = "none";
	}

	top4.onclick = function() {
		top2.style.display = "none";
		top21.style.display = "block";
		top3.style.display = "none";
		top4.style.display = "none";
		top41.style.display = "block";
		center.style.display = "none";
		center1.style.display = "block";
	}

	$(function() {
		$(".popup").hide();
		$(".others1").click(function() {
			var control = $(this).find(".popup");
			$(control).toggle(100)
		});
	})

	popup1.onclick = function() {

		var d = document.createElement("div");
		d.innerHTML = ", 吕光翟火韦";
		var i = document.getElementById("i");
		var childs = i.childNodes;
		if(childs.length < 1) {
			i.appendChild(d);
		} else {
			i.removeChild(childs[0]);
		}

	}

	popup2.onclick = function() {
		end.style.display = "block";
		event.stopPropagation();
	}

	face.onclick = function() {
		this.style.display = "none";
		w.style.display = "block";
		hide1.style.display = "block";
		event.stopPropagation();
	}

	hide1.onclick = function() {
		face.style.display = "block";
		w.style.display = "none";
		hide1.style.display = "none";
		event.stopPropagation();
	}

	i1.onclick = function() {
		write.innerHTML = this.innerHTML;
		hide1.style.display = "none";
	}

	i2.onclick = function() {
		write.innerHTML = this.innerHTML;
		hide1.style.display = "none";
	}

	i3.onclick = function() {
		write.innerHTML = this.innerHTML;
		hide1.style.display = "none";
	}

	i4.onclick = function() {
		write.innerHTML = this.innerHTML;
		hide1.style.display = "none";
	}

	i5.onclick = function() {
		write.innerHTML = this.innerHTML;
		hide1.style.display = "none";
	}

	i6.onclick = function() {
		write.innerHTML = this.innerHTML;
		hide1.style.display = "none";
	}

	i7.onclick = function() {
		write.innerHTML = this.innerHTML;
		hide1.style.display = "none";
	}

	i8.onclick = function() {
		write.innerHTML = this.innerHTML;
		hide1.style.display = "none";
	}

	i9.onclick = function() {
		write.innerHTML = this.innerHTML;
		hide1.style.display = "none";
	}

	i10.onclick = function() {
		write.innerHTML = this.innerHTML;
		hide1.style.display = "none";
	}

	i11.onclick = function() {
		write.innerHTML = this.innerHTML;
		hide1.style.display = "none";
	}

	i12.onclick = function() {
		write.innerHTML = this.innerHTML;
		hide1.style.display = "none";
	}

	w.onclick = function() {
		w.style.display = "none";
		face.style.display = "block";
		hide1.style.display = "none";
		event.stopPropagation();
	}

	send.onclick = function() {
		var d = document.createElement("div");
		d.innerHTML = "吕光翟火韦:" + write.innerHTML;
		if(write.value == "") {
			alert("请输入内容");
			d.style.display = "none";
		}
		speak1.appendChild(d);
		write.innerHTML = ""

		d.onclick = function() {
			if(confirm("撤回？ ")) {
				speak1.removeChild(this)
			} else {}
		}
		end.style.display = "none";
	}

	write.onclick = function() {
		w.style.display = "none";
		face.style.display = "";
		hide1.style.display = "none";
		event.stopPropagation();
	}
	select1.onclick = function() {
		p.style.display = "block";
	}

}

$(function() {

	$("#top41").click(function() {
		var d = $("<div class='user1'></div>");
		var d1 = $("<div id='photo1'></div>");
		var d2 = $("<div id='content1'></div>");
		var d3 = $("<div id='name1'></div>");
		var d4 = $("<div id='text1'></div>");
		var d5 = $("<div id='userimg1'></div>");
		var d6 = $("<div id='record1'></div>");
		var d7 = $("<div id='time1'></div>");
		var d8 = $("<div class='others10'></div>");
		var d9 = $("<div class='popup'></div>");
		var d10 = $("<div id='popup11'></div>");
		var d11 = $("<div id='popup12'></div>");
		var d12 = $("<div id='allow1'></div>");
		var d13 = $("<div id='up'></div>");
		var d14 = $("<div id='observe'></div>");
		var d15 = $("<div id='yes1'></div>");
		var d16 = $("<div id='heart1'></div>");
		var d17 = $("<div id='people1'></div>");
		var d18 = $("<div id='i'></div>");
		var d19 = $("<div id='speak1'></div>");

		var img1 = $("<img src='../img/wx/微信图片_20170731162607.jpg' />")
		var img2 = $("<img src='../img/icon/moments/赞.svg' />")
		var img3 = $("<img src='../img/icon/menu/聊天.svg' />")
		var img4 = $("<img src='../img/wx/微信消息.svg' />")

		d1.append(img1);
		d3.append("吕光翟火韦");
		d4.append($("#write1").val());
		d5.append(p.innerHTML);
		d7.append("刚刚");
		d10.append(img2);
		d10.append(" 赞");
		d11.append(img3);
		d11.append("评论");
		d12.append(img4);

		d17.append(d18);

		d15.append(d16);
		d15.append(d17);

		d14.append(d15);
		d14.append(d19);

		d9.append(d10);
		d9.append(d11);

		d8.append(d9);
		d8.append(d12);

		d6.append(d7);
		d6.append(d8);

		d2.append(d3);
		d2.append(d4);
		d2.append(d5);
		d2.append(d6);
		d2.append(d13);
		d2.append(d14);

		d.append(d1);
		d.append(d2);
		$("#cen").prepend(d);

		top2.style.display = "";
		top21.style.display = "none";
		top3.style.display = "";
		top4.style.display = "";
		top41.style.display = "none";
		center.style.display = "block";
		center1.style.display = "";
		write1.value = "";
		p.innerHTML = "";

		$(".popup").hide();
		$(".others10").click(function() {
			var control = $(this).find(".popup");
			$(control).toggle(100)
		});

		$("#popup11").click(function() {

			var d = document.createElement("div");
			d.innerHTML = "吕光翟火韦";
			var i = document.getElementById("i");
			var childs = i.childNodes;
			if(childs.length < 1) {
				i.appendChild(d);
			} else {
				i.removeChild(childs[0]);
			}

		})
		
		$("#popup12").click(function() {
//			$("#end").css("display", "block");
		})

	})

})