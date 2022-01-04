function monterLegende() {

    let texte13 = document.querySelector(".txt1");
    texte13.style.display = "block";
    return anime({
        targets: ".txt1",
        translateY: '-5em',
        autoplay: false,
        easing: 'linear',      
        duration: 200
    }).play

}

function descendreLegende() {
    let txt1 = document.querySelector(".txt1");
    txt1.style.display = "block";
    return anime({
        targets: ".txt1",
        translateY: '5em',
        autoplay: false,
        easing: 'linear',      
        duration: 200
    }).play
}