// Galeria de poze
const gallery = document.querySelectorAll('.gal-sect');
const galleryImages = document.querySelectorAll('.fig');
const galImages = document.querySelectorAll('.fig');


window.onload = function () {
    var e = 0;
    gallery.forEach(gal => {
        for (let n = 1; n <= 14; n++) {
            gal.innerHTML += `<figure class="fig" id="img${n+e}"></figure>`; 
        };
        e+=14;
    });

    var g = 0;
    gallery.forEach(gal => {
        let wideImages = [];
        let i = 0;
        while (i < 5) {
            randNum = Math.floor(Math.random() * 13 + 1);
            if (!wideImages.includes(randNum)) {
                wideImages.push(randNum);
                i++;
            }
        }
        g++;
        console.log('gal= ' + g);
        console.log(wideImages);
        wideImages.forEach(num => {
            document.querySelector(`.gal-sect:nth-child(${g}) .fig:nth-child(${num})`).classList.add('mod');
        });
    });
    
    for (let n = 1; n <= 42; n++) {
        document.querySelector(`#img${n}`).style.backgroundImage = `url(../images/galerie/${n}.jpg)`;
    }
}

