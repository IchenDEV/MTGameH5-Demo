function addLoadEvent(func)
{
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }else{
        window.onload = function() {
            oldonload();
            func();
    }
}
}

//禁止二指放大
function banZoomIn() {
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
                event.preventDefault()
            }
    });
    document.addEventListener('gesturestart', function(event) {
        event.preventDefault()
    });
}
addLoadEvent(banZoomIn);

var pig = document.getElementById("plane");
var b1 = document.getElementById("bubble1");
pig.style.left = 425+'px';
pig.style.top = 1200+'px';
var wsObj = new WebSocket("ws://39.105.179.130:50050");   //建立连接

wsObj.onopen = function(){  
   wsObj.send("begin");
};

var t =70;
wsObj.onmessage = function(ev){  //获取后端响应
    switch(ev.data)
    {
        case "bom":
            alert("你输辣！");
          //  wsObj.close();
            break;
        case "begin":
            pig.style.left = 425+'px';
            pig.style.top = 1200+'px';
            b1.style.left = 50+'px';
            b1.style.top = 50+'px';
            var timer=setInterval(function(){
                var title = document.getElementById("title");
                if(t == 70)
                {
                   title.innerHTML = "剩余时间：70s";
                   title.classList.add('animated','infinite','tada');
                   t--;
                }
                else
                {
                    if(t == 1)
                        clearInterval(timer);
                    t--;
                    title.innerHTML = "剩余时间："+String(t)+"s";
                    if(t==0)
                        {
                            alert("你赢辣！");
                            wsObj.close();
                        }
                }
            },1000);
            break;
        default:
            var a = ev.data.split(",");
            pig.style.left = a[0] + "px";
            pig.style.top = a[1] + "px";
}
};

wsObj.onclose = function(ev){
    alert("close");
};

wsObj.onerror = function(ev){
    alert("error");
};

//运动
document.addEventListener('touchstart',function(e){
    var targetX = e.touches[0].clientX;
    var targetY = e.touches[0].clientY;
    scrollAnimation(targetX,targetY);
},false)
var time;
function scrollAnimation(tarX,tarY)
{
    var distx,disty;
    clearInterval(time);
            setTimeout(()=>{
        time = setInterval(() => {
        var needx = tarX-(b1.offsetLeft+25),needy=tarY-(b1.offsetTop+25);
        if(needx>=0)
        distx = Math.ceil(needx/50);
        else
        distx = Math.ceil(needx/50)-1;
        if(needy>=0)
        disty = Math.ceil(needy/50);
        else
        disty = Math.ceil(needy/50)-1;
        console.log(distx);
        console.log(disty);
        b1.style.top = b1.offsetTop+disty+'px';
        b1.style.left = b1.offsetLeft+distx+'px';
        if(needx>5||needx<-5||needy>5||needy<-5)
        {
        }
        else{
            b1.style.top = tarY - 25 + 'px';
            b1.style.left = tarX - 25 + 'px';
            clearInterval(time);
        }
        wsObj.send("b,"+String(b1.offsetLeft)+","+String(b1.offsetTop));
        }, 20);
},20);
}