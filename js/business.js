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
    

    //아코디언
    $(".business_item").mouseover(function(){
       $(this).siblings().removeClass("business_active"); 
       $(this).addClass("business_active"); 
        
        return false;
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