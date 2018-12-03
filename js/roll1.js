var oContainer=document.getElementById("container");
var oImgs=document.getElementsByClassName("banner")[0].getElementsByTagName("img");
var oLis =document.getElementsByClassName("circle")[0].getElementsByTagName("li");
var oLeft =document.getElementById("left");
var oRight =document.getElementById("right");

var now=0;//动态控制数组下标，完成图片和li的控制
var timer=null;

//鼠标经过li按钮，图片改变
function roll(){

    for(var i=0; i<oLis.length;i++){//li按钮组1..4
        oLis[i].index=i;//自定义属性
        oLis[i].onmouseover=function(){
            //console.log(this.index);
            now=this.index;//建立li按钮组与图片组之间 一一对应的关系
            play();
        }
    }
    
    function play(){
       show();
        now++;
        if(now==oImgs.length){
            now=0;
        }
    }
    function show(){//图片切换
        for(var i=0;i<oImgs.length;i++){
            oImgs[i].className="";//图片
            oLis[i].className="";//li
        }
        oImgs[now].className="on";//图片
        oLis[now].className="on";//li
    }
    function go(){//主函数
        timer=setInterval(play,1000);
    }
    go();
    
    //鼠标经过时停止，离开后继续
    oContainer.onmouseover=function(){//鼠标经过图片停止
        clearInterval(timer);
    }
    oContainer.onmouseout=function(){//鼠标离开图片开始动
        go();
    }
    
    //左右按钮控制轮播图片
    oLeft.onclick=oRight.onclick=function(){
        if(this==oLeft){//数组下标递减
            now--;//3 2 1 0 -1
            if(now==-1){
                now=oLis.length-1;
            }show();}
    
        else{///数组下标递增
            now++;//0 1 2 3 4
            if(now==oImgs.length) {
                now = 0;
            }show();}
    }
    
}
roll();




