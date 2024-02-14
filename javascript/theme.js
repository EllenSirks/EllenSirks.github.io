function pic() {
    var bgm = ['https://github.com/EllenSirks/EllenSirks.github.io/tree/main/images/pretty_antennae.png', 'https://github.com/EllenSirks/EllenSirks.github.io/tree/main/images/pretty_tarantula.png', 'https://github.com/EllenSirks/EllenSirks.github.io/tree/main/images/pretty_m83.png'];

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

var credit = ["The Antennae galaxies", "The Tarantula Nebula", "Southern Pinwheel Galaxy (M83)"][index];

const para = document.createElement("p");
const node = document.createTextNode(credit);
para.setAttribute("style", "color:white; position:fixed; right:10px; bottom: 20px; font-weight:bold");
para.appendChild(node);
const element = document.getElementById("image_credit");
element.appendChild(para);

// var credit = ["The Antennae galaxies", "The Tarantula Nebula", "Southern Pinwheel Galaxy (M83)"];
// var index = Math.floor(Math.random() * credit.length)

// const para = document.createElement("p");
// const node = document.createTextNode(credit[index]);
// para.setAttribute("style", "color:white; position:fixed; right:10px; bottom: 20px; font-weight:bold");
// para.appendChild(node);
// const element = document.getElementById("image_credit");
// element.appendChild(para);