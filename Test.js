var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);


function openTAB(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

var header = document.getElementById("tabcontent");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

//tracker effect
let mouse = {x: 0, y: 0}
let dist = 0
let kid = document.getElementById("kid")

const obj = {
  x: kid.offsetLeft + kid.offsetWidth / 2, 
  y: kid.offsetTop + kid.offsetHeight / 2
}

kid.style.transform = "translate(0px, -"+ kid.offsetHeight+"px)"

window.addEventListener("mousemove", el => {
  console.dir(el)
  mouse = {x: el.x, y: el.y}
  
  dist = vec2.dist(
    vec2.fromValues(obj.x, obj.y),
    vec2.fromValues(mouse.x, mouse.y))  
  
  
  if(dist < 150){
    let translate = "translate("
    + (mouse.x - obj.x) / 3+
    "px,"
    + (mouse.y - obj.y) / 3 +
    "px)"
    
    kid.style.transition = "0.2s"
    kid.style.transform = translate
    
    body.style.cursor = "crosshair"
  }else{
    kid.style.transition = "0.2s ease"
    kid.style.transform = "translate(0px, -"+ kid.offsetHeight / 2+"px)"
  }
})