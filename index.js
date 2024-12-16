function getErm() {
  return (
    "e".repeat(Math.ceil(Math.random() * 13)) +
    "r".repeat(Math.ceil(Math.random() * 13)) +
    "m".repeat(Math.ceil(Math.random() * 13)) +
    ".".repeat(Math.ceil(Math.random() * 13) + 1)
  );
}

// variables and objects
var backgrounds = document.getElementsByClassName("backgrounds")[0];
var vh = window.innerHeight;
var vw = window.innerWidth;
var template = document.getElementsByClassName("background")[0];
var tilt = (Math.PI * 18) / 180;
var targetHeight = Math.tan(tilt) * vw + vh;

var currHeight = 0;
while (currHeight < targetHeight) {
  var curr = template.cloneNode();
  // extra one at the beginning to scooch randomly
  curr.innerHTML += getErm();
  var nodeStyle = window.getComputedStyle(curr);
  currHeight += 32;
  curr.style.setProperty("top", `${currHeight}px`);
  backgrounds.appendChild(curr);
  var scoochAmount = Math.random() * (nodeStyle.width.slice(0, -2) / 2);
  curr.style.transform = `${nodeStyle.transform} translateX(-${scoochAmount}px)`;
  while (nodeStyle["width"].slice(0, -2) < vw) {
    curr.innerHTML += getErm();
  }
  // putting an extra one or two just in case, too lazy to account for other stuff
  curr.innerHTML += getErm();
  curr.innerHTML += getErm();
  curr.innerHTML += getErm();
}
