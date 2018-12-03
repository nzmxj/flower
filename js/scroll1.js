$(function(){
    $(document).scroll(function(){
            var Vn=$(document).scrollTop();
            var topM=$(".top").height();
            var topN=$(".logo").height();
            var topSum= topM+topN;
            
            var winHeight = $(window).height(); 


            if(Vn>topSum){
                $(".menu").addClass("JQ");
                $(".menu").css({
                    "position":"fixed",
                    "left":"0",
                    "top":"0"
                });

                if(Vn > winHeight){
                    $("#top").fadeIn();
                }else{
                    $("#top").fadeOut();
                }

            }else{
                $(".menu").css("position","static");
                $(".menu").removeClass("JQ");
            }
        });
       
                $("#top").click(function(){
                var Vn=$(document).scrollTop();
                var timer=null;
                function goBack(){
                    //y-=500;
                    Vn=(Vn*9.4)/10;
                    $(document).scrollTop(Vn);


                    if(Vn<1){
                        $(document).scrollTop(0);
                        clearInterval(timer);
                    }
                }
                timer=setInterval(goBack,8);
            })
        })
    

