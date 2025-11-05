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

var credit = ["Las Galaxias Antennae", "La Nebulosa Tarántula", "La galaxia del Molinete"][index];

const para = document.createElement("p");
const node = document.createTextNode(credit);
para.setAttribute("style", "color:white; position:fixed; right:10px; bottom: 20px; font-weight:bold");
para.appendChild(node);
const element = document.getElementById("image_credit_es");
element.appendChild(para);
