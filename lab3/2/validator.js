const numberImg = [
    "http://webdev.it.kmitl.ac.th/labdocs/unit3/images/0.png",
    "http://webdev.it.kmitl.ac.th/labdocs/unit3/images/1.png",
    "http://webdev.it.kmitl.ac.th/labdocs/unit3/images/2.png",
    "http://webdev.it.kmitl.ac.th/labdocs/unit3/images/3.png",
    "http://webdev.it.kmitl.ac.th/labdocs/unit3/images/4.png",
    "http://webdev.it.kmitl.ac.th/labdocs/unit3/images/5.png",
    "http://webdev.it.kmitl.ac.th/labdocs/unit3/images/6.png",
    "http://webdev.it.kmitl.ac.th/labdocs/unit3/images/7.png",
    "http://webdev.it.kmitl.ac.th/labdocs/unit3/images/8.png",
    "http://webdev.it.kmitl.ac.th/labdocs/unit3/images/9.png"
  ];

function randomNum() {
    const x = document.getElementById('number');
    x.innerHTML = '';

    for (let i = 0; i < 6; i++) {
        let randomDigit = Math.floor(Math.random() * 10);
        let img = document.createElement('img');
        img.src = numberImg[randomDigit];
        img.alt = randomDigit;
        x.appendChild(img);
    }
}
