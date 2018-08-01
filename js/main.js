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
    
    //메인 타이틀
    $(".section01_title li").addClass("section01_active");
    
    
        var full_kw = 1000;
        var full_deg = -45;
        var now_kw = 1000; // 현재 전력 입력
        var now_deg = full_deg - (((full_kw - now_kw) / 100)*18);
    
    
    
    
        //그래프 인풋 입력값
    $("#graph").keyup(function(){
        
        var input_kw = Number($("#graph").val());
        
        console.log(typeof input_kw);
        if(input_kw >= 0 && input_kw <= 1000) {
            now_kw = input_kw;
            var now_deg = full_deg - (((full_kw - now_kw) / 100)*18);
            
            $(".graph_circle").css({"transform":"rotate("+now_deg+"deg)"});
            return false;
        }else if(input_kw>1000) {
            now_kw = 1000;
            var now_deg = full_deg - (((full_kw - now_kw) / 100)*18);
            
            $(".graph_circle").css({"transform":"rotate("+now_deg+"deg)"});
        }
    });
    
    //스크롤 펑션
    $(window).scroll(function(){
        //그래프 돌리기
        var top = $(this).scrollTop();
        var view_point = $(".section03_title").offset().top;
        
        console.log(now_deg);
        if(top >= view_point) {
            $(".graph_circle").css({"transform":"rotate("+now_deg+"deg)"});
            return false;
        }
    
    });/*스크롤펑션*/
    
    

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
    
    
    //
    
 /*   $('.section03_more').hover(function(){
      var $elem = $(this);
      var angle = 90;
        
      $({deg: 0}).animate({deg: angle}, {
          duration: 10,
          step: function(now) {
              $elem.css({
                  transform: 'rotate(' + now + 'deg)'
              });
          }
      });
  },function(){
        var $elem = $(this);
      var angle = 0;
        
      $({deg: 0}).animate({deg: angle}, {
          duration: 10,
          step: function(now) {
              $elem.css({
                  transform: 'rotate(' + now + 'deg)'
              });
          }
      });
    });*/

   
    
    
});/*레디 펑션!*/