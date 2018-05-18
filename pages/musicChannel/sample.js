document.onmousemove=function(){
  //マウス移動時のイベントをBODYタグに登録する
  document.body.addEventListener("mousemove", function(e){
 
    //座標を取得する
    var mX = e.clientX;  //X座標
    var mY = e.clientY;  //Y座標
 
    //座標を表示する
    document.getElementById("txtX").value = mX;
    document.getElementById("txtY").value = mY;
  });
}

var $countA = 0;
function countUpA() {
    document.getElementById( "sampleOutputA" ).innerHTML = ++$countA;
}

window.onload = function() {
   
  document.body.onclick = function() {
      if (this.webkitRequestFullScreen) {
           this.webkitRequestFullScreen();
      }
      else if (this. mozRequestFullScreen) {
          this. mozRequestFullScreen();
      }
      else {
          alert("not found")
      }
  };

};

function fullScreen(){
  var screen = document.getElementById("live");
  if (screen.webkitRequestFullScreen) {
    screen.webkitRequestFullScreen();
  }
  else if (screen.mozRequestFullScreen) {
   screen.mozRequestFullScreen();
  }
  else if(creen.requestFullscreen()){
    screen.requestFullscreen();
  }
  else {
   alert("not found")
  }
}
/*
  element.dispatchEvent(new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
    detail: 1,
    screenX:0,
    screenY:0,
    clientX:70,
    clientY:70
  }));
*/