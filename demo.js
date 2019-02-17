
var imgLen=$('img').length;
var curDisplay=0;
var flag=true;
var timer=null;
var hLen=Math.floor(imgLen/2);
function init(){
    
   show();
   bindEvent();
}
init();


 function show(){
     var lNum,rNum;
    
     for(var i=0;i<hLen;i++){
        console.log(111)
        //  左边图片
         lNum=curDisplay-i-1;
         $('img').eq(lNum).css({
             transform:'translateX('+(-150*(i+1))+'px) translateZ('+(200-i*100)+'px) rotateY(30deg)'
         })
         //右边图片
         rNum=curDisplay+i+1;
         if(rNum>imgLen-1){
             rNum-=imgLen;
         }
         $('img').eq(rNum).css({
             transform:'translateX('+(150*(i+1))+'px) translateZ('+(200-i*100)+'px) rotateY(-30deg)'
         });
         
        }
        //中间图片
        $('img').eq(curDisplay).css({transform:'translateZ(300px)'
    });
                 $('img').on('transitioned',function(){
                     flag=true;
                 })

 }
function bindEvent(){
    $('img').on('click',function(e){
        if(flag){
            flag=false;
            curDisplay=$(this).index();
            show();
        }
    }).hover(function(){
        clearInterval(timer)
    },function(){
        timer=setInterval(function(){
            play();
        },2000);
        });
   
    timer=setInterval(play,2000)
}
// 自动轮播  
function play(){
    if(curDisplay==imgLen-1){
        curDisplay=0;

    }else{
        curDisplay++;
    }
    show();
}