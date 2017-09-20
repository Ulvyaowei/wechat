$(function() {

	var key = "b7f3afeea99c40c7a9df742f64551105";
	var url = "http://www.tuling123.com/openapi/api";

	$('#btn').click(function() {

		var info = {
			"key": key,
			"info": $("#content").val() // = content.value
		}

		var self = $("<div class='right size'></div><br>")
		self.html($("#content").val()) //   div.innerHTML = xxxx
		$("#wrap").append(self)

		$.ajax({
			type: "POST",
			url: url,
			data: info,
			dataType: "json",
			success: function(result) {
				var robot = $("<div class='left size'></div><br>")
				robot.html(result.text)
				$("#wrap").append(robot)

			}
		});

	})

})