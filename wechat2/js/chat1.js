window.onload = function() {

	write.onclick = function() {
		send.style.display = "block";
		more.style.display = "none";
		hide2.style.display = "none";
		w1.style.display = "none";
		face.style.display = "block";
		hide1.style.display = "none";
	}

	voice.onclick = function() {
		this.style.display = "none";
		w.style.display = "block";
		write.style.display = "none";
		f.style.display = "none";
		on.style.display = "block";
		hide2.style.display = "none";
		w1.style.display = "none";
		face.style.display = "block";
		hide1.style.display = "none";
		send.style.display = "none";
		more.style.display = "block";
	}

	content.onclick = function() {
		send.style.display = "none";
		more.style.display = "";
		write.style.display = "";
		on.style.display = "none";
		voice.style.display = "";
		w.style.display = "none";
		face.style.display = "";
		w1.style.display = "none";
		hide2.style.display = "none";
		hide1.style.display = "none";
	}

	w.onclick = function() {
		this.style.display = "none";
		voice.style.display = "";
		on.style.display = "none";
		write.style.display = "";
	}

	w1.onclick = function() {
		this.style.display = "none";
		face.style.display = "";
		hide1.style.display = "none";
		send.style.display = "none";
		more.style.display = "block";
	}

	face.onclick = function() {
		this.style.display = "none";
		w1.style.display = "block";
		hide2.style.display = "none";
		w.style.display = "none";
		voice.style.display = "block";
		on.style.display = "none";
		write.style.display = "block";
		hide1.style.display = "block";
		hide2.style.display = "none";
	}

	send.onclick = function() {

		var d = document.createElement("div")
		d.className = "f";
		d.innerHTML = f.innerHTML;
		content.appendChild(d);

		write.value = "";
		this.style.display = "none";
		more.style.display = "";
		hide1.style.display = "none";
		f.innerHTML = "";

		var div = document.getElementById('content');
		div.scrollTop = div.scrollHeight;

	}

	more.onclick = function() {
		hide2.style.display = "block";
		w1.style.display = "none";
		face.style.display = "block";
		hide1.style.display = "none";
		w.style.display = "none";
		voice.style.display = "block";
		on.style.display = "none";
		write.style.display = "block";
	}

	var light1;
	h3.onclick = function() {
		createLight1();
		light1.onclick = function() {
			document.body.removeChild(this)
		}
	}

	function createLight1() {
		var w = screen.availWidth;
		var h = screen.availHeight;

		light1 = document.createElement("div");
		light1.style.width = w + "px";
		light1.style.height = h + "px";
		light1.className = "light";

		createLogin1();

		document.body.appendChild(light1);
	}

	function createLogin1() {
		var d = document.createElement("div");
		var d1 = document.createElement("div");
		var d2 = document.createElement("div");
		d.className = "login";
		d1.className = "login1";
		d2.className = "login2";
		d1.innerText = "视频聊天";
		d2.innerText = "语音聊天";

		d.appendChild(d1);
		d.appendChild(d2);
		light1.appendChild(d);

	}

	var light;
	h4.onclick = function() {
		createLight();
		light.onclick = function() {
			document.body.removeChild(this)
		}
	}

	function createLight() {
		var w = screen.availWidth;
		var h = screen.availHeight;

		light = document.createElement("div");
		light.style.width = w + "px";
		light.style.height = h + "px";
		light.className = "light";

		createLogin();

		document.body.appendChild(light);
	}

	function createLogin() {
		var d = document.createElement("div");
		var d1 = document.createElement("div");
		var d2 = document.createElement("div");
		d.className = "login";
		d1.className = "login1";
		d2.className = "login2";
		d1.innerText = "发送位置";
		d2.innerText = "共享实时位置";

		d.appendChild(d1);
		d.appendChild(d2);
		light.appendChild(d);

		d1.onclick = function() {
			light.style.display = "none";
			top2.style.display = "none";
			top21.style.display = "block";
			top3.style.display = "none";
			top31.style.display = "block";
			top4.style.display = "none";
			top41.style.display = "block";
			top42.style.display = "block";
			content.style.display = "none";
			end.style.display = "none";
			place.style.display = "block";

			event.stopPropagation();
		}

	}

	// 百度地图API功能
//	var map = new BMap.Map("map"); // 创建Map实例
//	map.centerAndZoom(new BMap.Point(117.410011, 39.14479), 20); // 初始化地图,设置中心点坐标和地图级别
//	map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
//	map.setCurrentCity("天津"); // 设置地图显示的城市 此项是必须设置的
//	map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

    var map = new BMap.Map("map");            // 创建Map实例
	var point = new BMap.Point(117.410011,39.14479);//创建一个点对象，这里的参数是地图上的经纬度  
    map.centerAndZoom(point, 25);
    map.addControl(new BMap.NavigationControl());//缩放平移控件
    map.addControl(new BMap.ScaleControl());    //比例尺
//	var myKeys = ["公寓", "公司"];
//	var local = new BMap.LocalSearch(map, {
//		renderOptions:{map: map, panel:"result"},
//		pageCapacity:5
//	});
//	local.searchInBounds(myKeys, map.getBounds());

	h5.onclick = function() {
		head.style.display = "none";
		head1.style.display = "block";
		neck.style.display = "none";
		neck1.style.display = "block";
		content.style.display = "none";
		end.style.display = "none";
		money.style.display = "block";
	}
	
	m3.onclick = function() {
		head.style.display = "";
		head1.style.display = "none";
		neck.style.display = "";
		neck1.style.display = "none";
		content.style.display = "";
		end.style.display = "";
		money.style.display = "none";
		number1.value = "";
		number2.innerHTML = "0.00";
	}

	hide1.onclick = function() {
		this.style.display = "none";
		more.style.display = "none";
		send.style.display = "block";
		w1.style.display = "none";
		face.style.display = "block";
	}

	i1.onclick = function() {
		f.innerHTML = this.innerHTML;
		f.style.display = "";
	}
	i2.onclick = function() {
		f.innerHTML = this.innerHTML;
		f.style.display = "";
	}
	i3.onclick = function() {
		f.innerHTML = this.innerHTML;
		f.style.display = "";
	}
	i4.onclick = function() {
		f.innerHTML = this.innerHTML;
		f.style.display = "";
	}
	i5.onclick = function() {
		f.innerHTML = this.innerHTML;
		f.style.display = "";
	}
	i6.onclick = function() {
		f.innerHTML = this.innerHTML;
		f.style.display = "";
	}
	i7.onclick = function() {
		f.innerHTML = this.innerHTML;
		f.style.display = "";
	}
	i8.onclick = function() {
		f.innerHTML = this.innerHTML;
		f.style.display = "";
	}
	i9.onclick = function() {
		f.innerHTML = this.innerHTML;
		f.style.display = "";
	}
	i10.onclick = function() {
		f.innerHTML = this.innerHTML;
		f.style.display = "";
	}
	i11.onclick = function() {
		f.innerHTML = this.innerHTML;
		f.style.display = "";
	}
	i12.onclick = function() {
		f.innerHTML = this.innerHTML;
		f.style.display = "";
	}

	$(function() {

		$("#number1").keyup(function(event) {
			$("#number2").html($("#number1").val())
			$("#m3").attr("disabled",false)
			$("#m3").css("background-color", "#f44336")
		})

	})

}