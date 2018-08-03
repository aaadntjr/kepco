$.fn.hitTest = function(x, y){
	var bounds = this.offset();
	bounds.right = bounds.left + this.outerWidth();
	bounds.bottom = bounds.top + this.outerHeight();
	if(x >= bounds.left){
		if(x <= bounds.right){
			if(y >= bounds.top){
				if(y <= bounds.bottom){
					return true;
				}
			}
		}
	}
	return false;
}
$(document).ready(function(){
    
    //로그인 메뉴 열고닫기
    $(".login_open").click(function(){
        $(this).toggleClass("login_close");
        $(".login_menu").slideToggle();
        return false;
    });
    
    //서브메뉴 열기    
    $("ul.menu").mouseover(function(){
       $(".sub_menu").stop().slideDown(300);
        return false;
    });
    
    //서브메뉴 닫기    
    $("ul.menu").mouseleave(function(){
       $(".sub_menu").stop().slideUp(300);
        return false;
    });
    

    
    //마우스 무브 
//    $(".content_top li:nth-child(1)").mouseover(function(){
//       $(".move").css({"top":"0px","left":"0px"});
//        return false;
//    });
//    $(".content_top li:nth-child(2)").mouseover(function(){
//       $(".move").css({"top":"0px","left":"240px"});
//        return false;
//    });
//    $(".content_top li:nth-child(3)").mouseover(function(){
//       $(".move").css({"top":"0px","left":"480px"});
//        return false;
//    });
//    $(".content_bottom li:nth-child(1)").mouseover(function(){
//       $(".move").css({"top":"240px","left":"0px"});
//        return false;
//    });
//    $(".content_bottom li:nth-child(2)").mouseover(function(){
//       $(".move").css({"top":"240px","left":"240px"});
//        return false;
//    });
//    $(".content_bottom li:nth-child(3)").mouseover(function(){
//       $(".move").css({"top":"240px","left":"480px"});
//        return false;
//    });

    //마우스 움직임
    
//$.fn.hitTest = function(x, y){
//	var bounds = this.offset();
//	bounds.right = bounds.left + this.outerWidth();
//	bounds.bottom = bounds.top + this.outerHeight();
//	if(x >= bounds.left){
//		if(x <= bounds.right){
//			if(y >= bounds.top){
//				if(y <= bounds.bottom){
//					return true;
//				}
//			}
//		}
//	}
//	return false;
//}
    var mouse = {},
		$block = $(".bg_wrap"),
		startFlag = false;
 
	$(document).mousemove(function(e) {
		mouse.x = e.pageX;
		mouse.y = e.pageY;
 
		$block.each(function(index, el) {
			var $this = $(this),	
				hover = $this.hitTest(mouse.x, mouse.y),
				$bg = $(".content_bg",this),
				$offset = $this.offset(),
				width = $this.width(),
				height = $this.height(),
				center = {
					x : $offset.left + (width / 2),
					y : $offset.top + (height / 2)
				},
				range = {
					x1 : center.x + width / 6,
					x2 : center.x - width / 6,
					y1 : center.y + height / 6,
					y2 : center.y - height / 6
				},
				toStyle = {
					transition : (startFlag) ? "all 0.3s" : "none"
				};
 
			if(!hover) {
				if(mouse.x > range.x1) {
					// right
					toStyle.left = "200%";
				} else if(mouse.x < range.x2) {
					// left
					toStyle.left = "0";
				} else {
					// center
					toStyle.left = "100%";
				}
 
				if(mouse.y > range.y1) {
					// bottom
					toStyle.top = "200%";
				} else if(mouse.y < range.y2) {
					// top
					toStyle.top = "0";
				} else {
					// center
					toStyle.top = "100%";
				}
 
				$bg.css(toStyle);
			}
		});
 
		startFlag = true;
        
        
	});
 
    $block.mouseover(function(e) {
		var $this = $(this),
			$bg = $(".content_bg"),
			$offset = $this.offset(),
			width = $this.width(),
			height = $this.height(),
			center = {
				x : $offset.left + (width / 2),
				y : $offset.top + (height / 2)
			},
			range = {
				x1 : center.x + width / 6,
				x2 : center.x - width / 6,
				y1 : center.y + height / 6,
				y2 : center.y - height / 6
			},
			fromStyle = {
				transition : "none"
			},
			toStyle = {
				transition : "all 0.3s"
			};
 
		if(mouse.x > range.x1) {
			// right
			fromStyle.left = "200%";
			toStyle.left = "100%";
		} else if(mouse.x < range.x2) {
			// left
			fromStyle.left = "0";
			toStyle.left = "100%";
		} else {
			// center
			fromStyle.left = "100%";
			toStyle.left = "100%";
		};
 
		if(mouse.y > range.y1) {
			// bottom
			fromStyle.top = "200%";
			toStyle.top = "100%";
		} else if(mouse.y < range.y2) {
			// top
			fromStyle.top = "0";
			toStyle.top = "100%";
		} else {
			// center
			fromStyle.top = "100%";
			toStyle.top = "100%";
		};
		
		$bg.css(fromStyle);
        $bg.css(toStyle);
//        setTimeout(function() {
//			$bg.css(toStyle);
//		}, 10);
	});
	
    
    
    
    
    

    //패밀리 닫기
    $(".family_close").click(function(){
       $(".family").slideUp();
        $(".family_open").show();
        return false;
    });
    
        //패밀리 열기
    $(".family_open").click(function(){
       $(".family").slideDown();
        $(this).hide();
        return false;
    });
    $(".family_site").click(function(){
       $(".family").slideDown();
        $(".family_open").hide();
        return false;
    });

    
});/*레디 펑션!*/