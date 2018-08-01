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
    $(".content_top li:nth-child(1)").mouseover(function(){
       $(".move").css({"top":"0px","left":"0px"});
        return false;
    });
    $(".content_top li:nth-child(2)").mouseover(function(){
       $(".move").css({"top":"0px","left":"240px"});
        return false;
    });
    $(".content_top li:nth-child(3)").mouseover(function(){
       $(".move").css({"top":"0px","left":"480px"});
        return false;
    });
    $(".content_bottom li:nth-child(1)").mouseover(function(){
       $(".move").css({"top":"240px","left":"0px"});
        return false;
    });
    $(".content_bottom li:nth-child(2)").mouseover(function(){
       $(".move").css({"top":"240px","left":"240px"});
        return false;
    });
    $(".content_bottom li:nth-child(3)").mouseover(function(){
       $(".move").css({"top":"240px","left":"480px"});
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