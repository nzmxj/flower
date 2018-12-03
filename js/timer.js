var oLi=document.getElementById("clock1");
var oLi2=document.getElementById("clock2");
var n= 0, timers=null; 
var curr=new Date();
   //开始计时
   var year = curr.getFullYear();
   var month = curr.getMonth()+1;//月份加1
   var day = curr.getDate();
   var hour=curr.getHours();
   var minutes=curr.getMinutes();
   var seconds=curr.getSeconds();
   var num=0;
   var a=0;
   for(var i=1;i<month;i++){
    if(i==1||i==3||i==5||i==7||i==8||i==10||i==12){
        a=31;
    }else if(i==2){
        if((year%4==0)&&(year%100!=0)||year%400==0){
            a=29;
        }
        else {a=28;}
    }else{
        a=30
    }
                        num+=a;
   }
   num+=day;
  
onload= function () {
    clearInterval(timer);    
    timers=setInterval(function(){
         seconds++;
          if(seconds<10){
            seconds='0'+seconds;
           
          }else if(seconds>59){
            seconds=0;
            minutes++;
        }
        
        if(minutes>=59){
            hour++;
}
if(hour==24){
    num++;
}
           time();
          },1000)  }
 function time(){
            oLi.innerHTML=num+"天"+hour+"小时"+minutes+"分"+seconds+"秒";
            oLi2.innerHTML=num+"天"+hour+"小时"+minutes+"分"+seconds+"秒";
          }
          time();
   