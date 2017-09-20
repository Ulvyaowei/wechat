$(function() {

	/*  先让点赞和评论区  都隐藏   */
	$(".praise_area").hide();

	/* 点击事件 */
	$(".reply_img").click(function() {
		var control = $(this).find(".praise_area");
		$(control).toggle(100)
	});
	var praise = document.getElementsByClassName("praise_div");
	var comment = document.getElementsByClassName("comment_div");
	var votes = document.getElementsByClassName("votes");
	var texts = document.getElementsByClassName("praise_text");
	var l = praise.length;
	var flag1 = false;
	for(var i = 0; i < l; i++) {
		praise[i].index = i;
		praise[i].onclick = function() {
			var str = votes[this.index].innerText;
			if(!flag1) {
				votes[this.index].lastElementChild.innerText += "，羚羊";
				texts[this.index].innerText = "取消";
				flag1 = true;
			} else {
				votes[this.index].lastElementChild.innerText = str.substring(0, str.length - 3);
				texts[this.index].innerText = "点赞";
				flag1 = false;
			}
		}
		votes[i].onclick = function(){
			
			
		}
	}
	
	

});