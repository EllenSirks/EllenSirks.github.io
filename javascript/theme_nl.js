function pic() {
    var bgm = ['images/pretty_antennae.PNG', 'images/pretty_tarantula.PNG', 'images/pretty_m83.PNG'];

    index = Math.floor(Math.random() * bgm.length)

    $('.random_bg').css({
        'background' : 'url('+ bgm[index] + ') no-repeat',
        'background-position' : '100%',
        'background-size' : 'cover',
        'background-attachment': 'fixed',
        '-ms-overflow-style': 'none'
    });

  return index

}

var index = pic();

var credit_nl = ["De Antennae sterrenstelsels", "De Tarantula Nebula", "Zuidelijk Windmolenstelsel (M83)"][index];

const para = document.createElement("p");
const node = document.createTextNode(credit_nl);
para.setAttribute("style", "color:white; position:fixed; right:10px; bottom: 20px; font-weight:bold");
para.appendChild(node);
const element = document.getElementById("image_credit_nl");
element.appendChild(para);

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