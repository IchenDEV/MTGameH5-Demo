var wsObj = new WebSocket("ws://39.105.179.130:50050"); //建立连接

var plane = document.getElementById("plane");
var backg = document.getElementById("backGounrd");
// 定义水平方向和垂直方向上的坐标
var x = 425;
var y = 1200;
var vx = 0;
var vy = -39;
var fx = 0;
var fy = 0;
var time = null;
var speed = 0.3;
var maxX = 800;
var maxY = 1600;
var t = 70;
var bubble = document.getElementById("bubble1");

wsObj.onopen = function() {
  wsObj.send("begin");
};

wsObj.onmessage = function(ev) {
  switch (ev.data) {
    case "bom":
      alert("你赢辣！");
      // wsObj.close();
      break;
    case "begin":
      plane.style.left = 425 + "px";
      plane.style.top = 1200 + "px";
      bubble.style.left = 50 + "px";
      bubble.style.top = 50 + "px";
      var timer = setInterval(function() {
        var title = document.getElementById("title");
        if (t == 70) {
          title.innerHTML = "剩余时间：70s";
          title.classList.add("animated", "infinite", "tada");
          t--;
        } else {
          if (t == 1) clearInterval(timer);
          title.innerHTML = "剩余时间：" + String(t) + "s";
          t--;
          if (t == 0) {
            alert("你输辣！");
            wsObj.close();
          }
        }
      }, 1000);
      break;
    default:
      var a = ev.data.split(",");
      bubble.style.left = a[0] + "px";
      bubble.style.top = a[1] + "px";
  }
};
wsObj.onclose = function(ev) {
  alert("close");
};
wsObj.onerror = function(ev) {
  alert("error");
};
time = setInterval(function() {
  vy += 0.2 + fy;
  vx += fx;
  // 设置x和y的临界值
  x += speed * vx;
  y += speed * vy;
  if (x >= maxX) {
    x = maxX;
    vx = -vx;
  }
  if (x <= 0) {
    x = 0;
    vx = -vx;
  }
  if (y >= maxY) {
    y = maxY;
    vy = -vy;
  }
  if (y <= 0) {
    y = 0;
    vy = -vy;
  }
  plane.style.left = x + "px";
  plane.style.top = y + "px";
  wsObj.send("p," + String(x) + "," + String(y));
}, 20);
//注册触摸函数
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    };
  }
}
//禁止二指放大
function banZoomIn() {
  document.addEventListener("touchstart", function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  document.addEventListener("gesturestart", function(event) {
    event.preventDefault();
  });
}
function test() {
  touch = event.touches[0];
  console.log(touch.clientX, "*", touch.clientY);
  if (touch.clientX > x - 75) vx = 15;
  else vx = -15;
}
backg.addEventListener(
  "touchstart",
  function() {
    test();
  },
  false
);
