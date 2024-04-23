var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function createCounts() {
    var nr_images = document.getElementsByTagName('img').length;
    return Array.from({length: nr_images}, (v, i) => 1)
}

function selectCount(id) {
  return parseInt(id.split('img')[1]);
}

var counts = createCounts();

function changeImg(id) {

  var scale = 2;

  var img = document.getElementById(id);
  var index = selectCount(id);

  var padding = parseFloat(img.style.paddingLeft.split('px')[0])+parseFloat(img.style.paddingRight.split('px')[0]);
  if (isNaN(padding)) {
    padding = 0;
  }

  var sidenav = document.getElementsByClassName('sidenav')[0];
  var offset = -(1/scale)*(img.offsetLeft - (window.innerWidth/2 + sidenav.scrollWidth/2 - (img.width+padding)/2));

  count = counts[index]
  
  if (count < 0) {
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.35s ease";
    count = count*-1;
    counts[index] = count;
  } else if (count > 0) {
    img.style.transform = "scale("+scale+") translateX("+offset+"px)";
    img.style.transition = "transform 0.35s ease";
    count = count*-1;
    counts[index] = count;
  }
}